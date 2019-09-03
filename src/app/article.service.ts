import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  getArticles() {
    return this.httpClient.get('https://conduit.productionready.io/api/articles');
  }
}
