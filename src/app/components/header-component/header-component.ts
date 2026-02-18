import { Component, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ArticleModel } from '../../models/Article-model';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {

  dataArticle = signal<ArticleModel | null>(null)

  constructor(private apiService: ApiService) {

    this.apiService.fetchArticle(1).subscribe({
      next: (response) => {
        this.dataArticle.set(response as any);
      },
      error: (error) => {console.error(error)}
    });
  }

}
