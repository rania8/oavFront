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
import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
const customSelectOptions : INgxSelectOptions = {
  optionValueField: 'id',
  optionTextField: 'text',
  keyCodeToRemoveSelected: 'Backspace',
  keyCodeToOptionsOpen: ['ArrowDown'],
  keyCodeToOptionsSelect: ['Tab', 'Enter'],
  keepSelectedItems: false
  // autoSelectSingleOption: true
};
@NgModule({
  declarations: [
    AccueilComponent,
    RecapitulatifComponent,
    SiretValidationComponent,
    ProduitComponent,
    QuestionAvantVenteComponent,
    NavBarComponent,
    OffreComponent,

  ],
  imports: [
    CommonModule,
    AdhesionEntrepriseRoutingModule, FormsModule,AccordionModule, NgxSelectModule.forRoot(customSelectOptions),
  ]
})
export class AdhesionEntrepriseModule { }
