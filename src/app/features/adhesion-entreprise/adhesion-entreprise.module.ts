import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdhesionEntrepriseRoutingModule } from './adhesion-entreprise-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SiretValidationComponent } from './components/siret-validation/siret-validation.component';
import { ProduitComponent } from './components/produit/produit.component';
import { FormsModule } from '@angular/forms';
import { QuestionAvantVenteComponent } from './components/question-avant-vente/question-avant-vente.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AccueilComponent,

    SiretValidationComponent,
    ProduitComponent,
    QuestionAvantVenteComponent,
    NavBarComponent,

  ],
  imports: [
    CommonModule,
    AdhesionEntrepriseRoutingModule, FormsModule
  ]
})
export class AdhesionEntrepriseModule { }
