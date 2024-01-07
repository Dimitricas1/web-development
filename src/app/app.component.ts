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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoinComponent, ScrollingModule, MatDividerModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule, ScrollingModule]
})
export class AppComponent implements OnInit {
  title = 'coinpaprika';
  currencies: any;
  statusCode: number = 200;
  constructor(public dialog: MatDialog){}
  coins = inject(GetcoinsService);

  ngOnInit(): void {
    this.getListCoins();
  }

  getListCoins(){
    this.coins.getListCoins().subscribe({next: data => this.currencies = data,
      error: error => {this.statusCode = error.status;
        console.log(error.status);
        if (error.status !== 200) this.openErrorDialog(error.status);
      }
    });
  }

  openErrorDialog(errorCode: number){
    let errorTextValue = 'Неизвестная ошибка';
    if (errorDescription[errorCode]) errorTextValue = errorDescription[errorCode];
    this.dialog.open(HttpErrorDialog, {
      data: {
        errorCode: errorCode,
        errorText: errorTextValue
      }
    });
  }
}

export interface ErrorDescription {
  [code: number]: string;
}
const errorDescription:ErrorDescription = {
  402: 'Сервер сообщил о превышении лимита запросов',
  404: 'Данные не обнаружены на сервере'
};

@Component({
  selector: 'http-error-dialog',
  templateUrl: 'http-error-dialog.html',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule]
})
export class HttpErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}
