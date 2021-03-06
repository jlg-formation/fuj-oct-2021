import { ArticleService } from './../services/article.service';
import { Component } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  selectedArticles = new Set<Article>();

  constructor(public articleService: ArticleService) {}

  remove() {
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.clear();
  }

  toggle(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}
