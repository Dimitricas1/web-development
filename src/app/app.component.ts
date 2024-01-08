import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin/coin.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { GetcoinsService } from './services/getcoins.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { errorDescriptions } from './errorDescriptions';
import { BehaviorSubject } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoinComponent, ScrollingModule, MatDividerModule, MatProgressSpinnerModule, MatButtonModule, MatToolbarModule, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule, ScrollingModule]
})
export class AppComponent implements OnInit {
  title = 'coinpaprika';
  currencies: any = '';
  constructor(public dialog: MatDialog){}
  coins = inject(GetcoinsService);

  ngOnInit(): void {
    this.getListCoins();
    errorListener = statusCode.subscribe(errorCode => {if (errorCode !== 200) this.openErrorDialog(errorCode);});
  }


  getListCoins(){
    this.coins.getListCoins().subscribe({next: data => this.currencies = data,
      error: error => {statusCode.next(error.status);
        statusCode.complete();
      }
    });
  }

  openErrorDialog(errorCode: number){
    let errorTextValue = 'Неизвестная ошибка';
    if (errorDescriptions[errorCode]) errorTextValue = errorDescriptions[errorCode];
    let isEmptyList: boolean = false;
    if (this.currencies === '') isEmptyList = true;
    this.dialog.open(HttpErrorDialog, {
      data: {
        errorCode: errorCode,
        errorText: errorTextValue,
        isEmptyList: isEmptyList
      },
      enterAnimationDuration: '700ms',
      exitAnimationDuration: '700ms',
      disableClose: isEmptyList
    });
  }
}

export const statusCode = new BehaviorSubject(200);
export let errorListener: any;

@Component({
  selector: 'http-error-dialog',
  templateUrl: 'http-error-dialog.html',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule]
})
export class HttpErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}
