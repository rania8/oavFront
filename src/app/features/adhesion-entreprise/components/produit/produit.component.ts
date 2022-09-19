import { Component, Input, OnInit } from '@angular/core';
import { EntrepriseModel } from '../../models/entrepriseModel';
import { ProduitModel } from '../../models/produitModel';
import { ProduitServiceService } from '../../services/produit-service.service';
import { QuestionServiceService } from '../../services/question-service.service';
import { SiretServiceService } from '../../services/entreprise-service.service';
import { NotificationsService } from 'angular2-notifications';

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
  showQuestions: boolean = false;
  displayNoProduct: boolean = false;

  constructor(private produitService: ProduitServiceService, private siretService: SiretServiceService,  private notificationsService: NotificationsService) { }

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
        this.produitSante = this.listProduits[i];
        // this.produitSante.libelle = this.listProduits[i].libelle;
        // this.produitSante.typeProduit.idTypeProd = this.listProduits[i].typeProduit.idTypeProd;
        // this.produitSante.typeProduit.libelle = this.listProduits[i].typeProduit.libelle;
      }
      if (this.listProduits[i].libelle == "prevoyance") {
        this.produitPrevoyance = this.listProduits[i];
        // this.produitPrevoyance.libelle = this.listProduits[i].libelle;
        // this.produitPrevoyance.typeProduit.idTypeProd = this.listProduits[i].typeProduit.idTypeProd;
        // this.produitPrevoyance.typeProduit.libelle = this.listProduits[i].typeProduit.libelle;
      }
    }
    if (santechecked==false&&pervoyanceChecked==false){
      this.displayNoProduct=true;
    }
    else{

    if (santechecked) {
      //on alimente le produit dans produitSelected
      this.entreprise.productsSelected.push(this.produitSante);
    }
    if (pervoyanceChecked) {
      this.entreprise.productsSelected.push(this.produitPrevoyance);
      // let tailleListProd = this.entreprise.productsSelected.length;
      // this.entreprise.productsSelected[tailleListProd] = this.produitPrevoyance;
    }
    this.siretService.updateEntreprise(this.entreprise).subscribe(rslt => { 

      this.notificationsService.success("Sauvgarde effectué avec succès");
    });
    this.displayNoProduct=false;

    this.showQuestions = true;
  }
  }
}
