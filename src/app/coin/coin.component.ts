import { Component, inject, Input, OnInit, Inject } from '@angular/core';
import { GetcoinsService } from '../services/getcoins.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { errorDescriptions } from '../errorDescriptions';
import { statusCode } from '../app.component';


@Component({
  selector: 'app-coin',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule ],
  templateUrl: './coin.component.html',
  styleUrl: './coin.component.css'
})

export class CoinComponent implements OnInit {

  @Input() id!: string;

  currency: any;


  constructor(public dialog:MatDialog){}
  

  coins=inject(GetcoinsService);

  ngOnInit(): void {
    this.getCoinById();
    console.log('Fetching');
  }

  getCoinById(){
    this.coins.getCoinById(this.id).subscribe({next: currency => {this.currency = currency;
      console.log(currency);},
    error: error => {statusCode.next(error.status);
      statusCode.complete();
      console.log(error.status);
    }
    });
  }

  openErrorDialog(errorCode: number){
    let errorTextValue = 'Неизвестная ошибка';
    if (errorDescriptions[errorCode]) errorTextValue = errorDescriptions[errorCode];
    this.dialog.open(HttpErrorDialog, {
      data: {
        errorCode: errorCode,
        errorText: errorTextValue
      }
    });
  }
}


@Component({
  selector: 'http-error-dialog',
  templateUrl: '../http-error-dialog.html',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule]
})
export class HttpErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}
