import { Component, Input, OnInit } from '@angular/core';
import { EntrepriseModel } from '../../models/entrepriseModel';
import { ProduitModel } from '../../models/produitModel';
import { ProduitServiceService } from '../../services/produit-service.service';
import { SiretServiceService } from '../../services/siret-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  value = true;
  public libelle: string = "";
  public displayProduit: boolean = false;
  @Input("entrepriseCreated") entreprise: EntrepriseModel;
  i: number = 0;
  listProduits: ProduitModel[];
  produitSante: ProduitModel = new ProduitModel();
  produitPrevoyance: ProduitModel = new ProduitModel();
  taille: number;

  constructor(private produitService: ProduitServiceService, private siretService: SiretServiceService) { }

  ngOnInit(): void {
    this.produitService.getAllProducts().subscribe(rslt => {
      this.listProduits = rslt;
      this.taille = rslt.length;

    });

  }
  checkedBox(formState: any) {
    let santechecked = formState.checkboxSante;
    let pervoyanceChecked = formState.checkboxPrevoyance;
    this.entreprise.productsSelected = [];
    for (let i = 0; i < this.taille; i++) {
      if (this.listProduits[i].libelle == "sante") {
        this.produitSante= this.listProduits[i];
        // this.produitSante.libelle = this.listProduits[i].libelle;
        // this.produitSante.typeProduit.idTypeProd = this.listProduits[i].typeProduit.idTypeProd;
        // this.produitSante.typeProduit.libelle = this.listProduits[i].typeProduit.libelle;
      }
      // else
      if (this.listProduits[i].libelle == "prevoyance") {
        this.produitPrevoyance = this.listProduits[i];
        // this.produitPrevoyance.libelle = this.listProduits[i].libelle;
        // this.produitPrevoyance.typeProduit.idTypeProd = this.listProduits[i].typeProduit.idTypeProd;
        // this.produitPrevoyance.typeProduit.libelle = this.listProduits[i].typeProduit.libelle;
      }
    }
    if (santechecked) {
      //on alimente le produit dans produitSelected
      
      this.entreprise.productsSelected.push(this.produitSante);
    
      //this.siretService.updateEntreprise(this.entreprise).subscribe(rslt => { });
    }
    // else{
      if (pervoyanceChecked) {
      this.entreprise.productsSelected.push(this.produitPrevoyance);

      // let tailleListProd = this.entreprise.productsSelected.length;

      // this.entreprise.productsSelected[tailleListProd] = this.produitPrevoyance;
      //this.siretService.updateEntreprise(this.entreprise).subscribe(rslt => { });
    }
          this.siretService.updateEntreprise(this.entreprise).subscribe(rslt => { });

 // }


    



  }
  // valideInfo_afficheProd() {
  //   this.produitService.getAllProducts().subscribe(result => {
  //     console.log(result);
  //     this.libelle = result[this.i].libelle;
  //     this.i++;
  //   });
  // }



  // valideProduits() {
  //   console.log(this.checkboxSante.checked);
  //   console.log(this.checkboxPrevoyance.checked);

  //   //document.getElementById("checkboxSante")
  //   if (this.checkboxSante?.checked) {
  //     //on alimente le produit dans produitSelected
  //     let tailleListProd = this.entreprise.productsSelected.length;

  //     this.entreprise.productsSelected[tailleListProd] = this.listProduits[0];
  //     this.siretService.updateEntreprise(this.entreprise);
  //   }

  //   if (this.checkboxPrevoyance?.checked) {
  //     let tailleListProd = this.entreprise.productsSelected.length;

  //     this.entreprise.productsSelected[tailleListProd] = this.listProduits[1];
  //     this.siretService.updateEntreprise(this.entreprise);
  //   }

  // }



  // checkProd() {
  //   this.produitService.getAllProducts().subscribe(rslt => {
  //     let tailleListProd = this.entreprise.productsSelected.length;
  //     let produitNonExistant = true;

  //     if (this.checkboxSante.checked) {
  //       for (let i = 0; i <= tailleListProd; i++) {
  //         if (this.entreprise.productsSelected[i].idProduit == rslt[0].idProduit) { produitNonExistant = false; }
  //       }
  //       if (produitNonExistant) {
  //         //il faut controller l'existance de ce prod  
  //         this.entreprise.productsSelected[tailleListProd].idProduit = rslt[0].idProduit;
  //         this.entreprise.productsSelected[tailleListProd].libelle = rslt[0].libelle;
  //         this.entreprise.productsSelected[tailleListProd].typeProduit.idTypeProd = rslt[0].typeProduit.idTypeProd;
  //         this.entreprise.productsSelected[tailleListProd].typeProduit.libelle = rslt[0].typeProduit.libelle;
  //       }
  //       produitNonExistant = true;

  //     }
  //     else if (this.checkboxPrevoyance.checked) {
  //       for (let i = 0; i <= tailleListProd; i++) {
  //         if (this.entreprise.productsSelected[i].idProduit == rslt[1].idProduit) { produitNonExistant = false; }
  //       }
  //       if (produitNonExistant) {
  //         this.entreprise.productsSelected[tailleListProd].idProduit = rslt[1].idProduit;
  //         this.entreprise.productsSelected[tailleListProd].libelle = rslt[1].libelle;
  //         this.entreprise.productsSelected[tailleListProd].typeProduit.idTypeProd = rslt[1].typeProduit.idTypeProd;
  //         this.entreprise.productsSelected[tailleListProd].typeProduit.libelle = rslt[1].typeProduit.libelle;
  //       }
  //       produitNonExistant = true;
  //     }
  //   });

  // }

}
