import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleModel } from '../models/Article-model';
import { ProduitModel } from '../models/Produit-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  fetchArticle(id_article: number) {
    return this.http.get<ArticleModel[]>(`${this.baseUrl}article.php?id=${id_article}`);
  }

  fetchProducts() {
    return this.http.get<ProduitModel[]>(`${this.baseUrl}products.php`);
  }

  envoyerFormulaire(formValues: FormData) {
    return this.http.post(`${this.baseUrl}contact.php`, formValues);
  }
}
