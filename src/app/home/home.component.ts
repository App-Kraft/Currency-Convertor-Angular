import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exchangeRate;
  currencies;

  baseCurrency;
  toCurrency;

  baseCurrencyAmount = 1.00;
  toCurrencyAmount;

  baseCurrencySymbol;
  toCurrencySymbol;

  date;
  
  choose = undefined;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencies = this.currencyService.getCurrencies();
  }

  getExchangeRate(baseCurrency, toCurrency) {
    this.currencyService.getExcahngeRate(baseCurrency, toCurrency).subscribe((data: any) => {
      console.log('er ', toCurrency)
      this.exchangeRate = data.rates[toCurrency];
      this.date = data.date;
      this.toCurrencyAmount = this.exchangeRate;
    })
  }

  convert() {
    this.exchangeRate = null;
    this.baseCurrencyAmount = 1;
    this.toCurrencyAmount = null;

    if (this.baseCurrency && this.toCurrency) {
      this.baseCurrencySymbol = getCurrencySymbol(this.baseCurrency, 'narrow');
      this.toCurrencySymbol = getCurrencySymbol(this.toCurrency, 'narrow');
      this.getExchangeRate(this.baseCurrency, this.toCurrency);
    }
  }

  calcuateCurrency() {
    this.toCurrencyAmount = this.baseCurrencyAmount * this.exchangeRate;
  }

}
