import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu-component/menu-component";
import { HeaderComponent } from "../../components/header-component/header-component";
import { NotreConceptComponent } from "../../components/notre-concept-component/notre-concept-component";
import { CarteComponent } from "../../components/carte-component/carte-component";
import { ContactComponent } from "../../components/contact-component/contact-component";

@Component({
  selector: 'app-homepage',
  imports: [MenuComponent, HeaderComponent, NotreConceptComponent, CarteComponent, ContactComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}
