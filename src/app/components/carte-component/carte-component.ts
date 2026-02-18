import { Component, signal } from '@angular/core';
import { ProduitModel } from '../../models/Produit-model';
import { ApiService } from '../../services/api-service';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-carte-component',
  imports: [TruncatePipe],
  templateUrl: './carte-component.html',
  styleUrl: './carte-component.scss',
})
export class CarteComponent {

  listeProduits = signal<ProduitModel[]>([]);

  constructor(private apiService: ApiService){

    this.apiService.fetchProducts().subscribe({
      next: (response) => {
        this.listeProduits.set(response)
      },
      error: (error) => {console.error(error)}
    });
  }

}
