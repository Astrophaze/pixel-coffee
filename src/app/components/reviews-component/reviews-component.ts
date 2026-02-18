import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ReviewModel } from '../../models/Review-model';
import { ApiService } from '../../services/api-service';
import { DatePipe } from '@angular/common';
import { NotePipe } from '../../pipes/note-pipe';

@Component({
  selector: 'app-reviews-component',
  imports: [DatePipe, NotePipe],
  templateUrl: './reviews-component.html',
  styleUrl: './reviews-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewsComponent {

  // breakpoints = {
  //   0: {
  //     slidesPerView: 1
  //   },
  //   768: {
  //     slidesPerView: 2
  //   },
  //   1024: {
  //     slidesPerView: 3
  //   },
  // };

  listeReviews = signal<ReviewModel[]>([]);

  constructor(private apiService: ApiService){
    this.apiService.fetchReviews().subscribe({
      next: (response) => {
        this.listeReviews.set(response)
      },
      error: (error) => {console.error(error)}
    });
  }
}
