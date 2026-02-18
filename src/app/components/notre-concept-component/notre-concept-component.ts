import { Component, signal } from '@angular/core';
import { ArticleModel } from '../../models/Article-model';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-notre-concept-component',
  imports: [],
  templateUrl: './notre-concept-component.html',
  styleUrl: './notre-concept-component.scss',
})
export class NotreConceptComponent {

  dataArticle = signal<ArticleModel | null>(null)

  constructor(private apiService: ApiService) {

    this.apiService.fetchArticle(2).subscribe({
      next: (response) => {
        this.dataArticle.set(response as any);
      },
      error: (error) => {console.error(error)}
    });
  }


}
