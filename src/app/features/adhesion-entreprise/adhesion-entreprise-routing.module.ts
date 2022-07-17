import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { InfosGeneralesComponent } from './infos-generales/infos-generales.component';
import { SiretValidationComponent } from './siret-validation/siret-validation.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
{path:"",
component:AccueilComponent},

{path:"info",
component:InfosGeneralesComponent},
{path:"siret",
component:SiretValidationComponent},
{path:"produit",
component:ProduitComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdhesionEntrepriseRoutingModule { } 
