import { Component, signal } from '@angular/core';
import { ArticleModel } from '../../models/Article-model';
import { ApiService } from '../../services/api-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {
  dataArticle = signal<ArticleModel | null>(null);
  formulaire: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.apiService.fetchArticle(3).subscribe({
      next: (response) => {
        this.dataArticle.set(response as any);
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.formulaire = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      entreprise: ['', [Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });
  }

  envoyerFormulaire() {
    if (this.formulaire.valid) {
      const formData = new FormData();
      formData.append('first_name', this.formulaire.get('prenom')?.value);
      formData.append('last_name', this.formulaire.get('nom')?.value);
      formData.append('email', this.formulaire.get('email')?.value);
      formData.append('company', this.formulaire.get('entreprise')?.value);
      formData.append('message', this.formulaire.get('message')?.value);

      this.apiService.envoyerFormulaire(formData).subscribe({
        next: (response) => {
          console.log('Succès !', response);
          this.formulaire.reset();
        },
        error: (err) => console.error("Erreur lors de l'envoi", err),
      });
    }
  }
}
