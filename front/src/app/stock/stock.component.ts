import { Article } from './../interfaces/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles: Article[] = [
    { name: 'Tournevis', price: 1.23, qty: 234 },
    { name: 'Pelle', price: 2.4, qty: 120 },
    { name: 'Marteau', price: 3, qty: 5 },
    { name: 'Pince', price: 5, qty: 1200 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
