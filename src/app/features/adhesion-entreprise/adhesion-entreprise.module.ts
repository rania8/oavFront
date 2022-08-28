import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdhesionEntrepriseRoutingModule } from './adhesion-entreprise-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SiretValidationComponent } from './components/siret-validation/siret-validation.component';
import { ProduitComponent } from './components/produit/produit.component';
import { FormsModule } from '@angular/forms';
import { QuestionAvantVenteComponent } from './components/question-avant-vente/question-avant-vente.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OffreComponent } from './components/offre/offre.component';
import{AccordionModule}from'ngx-bootstrap/accordion'
@NgModule({
  declarations: [
    AccueilComponent,

    SiretValidationComponent,
    ProduitComponent,
    QuestionAvantVenteComponent,
    NavBarComponent,
    OffreComponent,

  ],
  imports: [
    CommonModule,
    AdhesionEntrepriseRoutingModule, FormsModule,AccordionModule,
  ]
})
export class AdhesionEntrepriseModule { }
