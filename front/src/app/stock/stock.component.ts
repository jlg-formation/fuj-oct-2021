import { ArticleService } from './../services/article.service';
import { Component } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  constructor(public articleService: ArticleService) {}

  toggle(a: Article) {
    console.log('toggle: ', a);
  }
}
