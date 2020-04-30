import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  baseCurrency;
  currencies;
  rates;
  rateList = [];

  choose = undefined;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencies = this.currencyService.getCurrencies()
    console.log(this.currencies)
  }

  getCurrencyRates(baseCurrency) {
    this.rateList = [];
    this.currencyService.getCurrencyRates(baseCurrency).subscribe((data: any) => {
      this.rates = data.rates;
      let keys = Object.keys(this.rates).sort();
      keys.forEach(key => {
        this.rateList.push({
          code: key,
          name: this.currencies[key],
          value: this.rates[key],
          symbol: getCurrencySymbol(key, 'narrow')
        })
      })
      console.log('rate: ', this.rateList)
    })
  }
}
