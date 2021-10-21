import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';

const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article service instantiated.');
    this.refresh();
  }
  refresh() {
    console.log('refresh');
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
        this.save();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }

  add(article: Article) {
    super.add(article);
    this.http.post<void>(url, article).subscribe({
      next: () => {
        this.refresh();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }
}
