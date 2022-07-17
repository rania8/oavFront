import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdhesionEntrepriseRoutingModule } from './adhesion-entreprise-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { InfosGeneralesComponent } from './infos-generales/infos-generales.component';
import { SiretValidationComponent } from './siret-validation/siret-validation.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccueilComponent,
    InfosGeneralesComponent,
    SiretValidationComponent,
    ProduitComponent,
  ],
  imports: [
    CommonModule,
    AdhesionEntrepriseRoutingModule,FormsModule
  ]
})
export class AdhesionEntrepriseModule { }