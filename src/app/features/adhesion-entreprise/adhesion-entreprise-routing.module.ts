import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';

import { SiretValidationComponent } from './components/siret-validation/siret-validation.component';
import { ProduitComponent } from './components/produit/produit.component';
import { QuestionAvantVenteComponent } from './components/question-avant-vente/question-avant-vente.component';
import { OffreComponent } from './components/offre/offre.component';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },

  {
    path: "siret",
    component: SiretValidationComponent
  },
  {
    path: "produits",
    component: ProduitComponent
  },
  {
    path: "questions",
    component: QuestionAvantVenteComponent
  },
  {
    path: "offres",
    component: OffreComponent
  },
  { path: 'recap', component: RecapitulatifComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdhesionEntrepriseRoutingModule { } 
