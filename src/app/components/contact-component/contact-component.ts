import { Component, signal } from '@angular/core';
import { ArticleModel } from '../../models/Article-model';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {
  dataArticle = signal<ArticleModel | null>(null);

  constructor(private apiService: ApiService) {
    this.apiService.fetchArticle(3).subscribe({
      next: (response) => {
        this.dataArticle.set(response as any);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
