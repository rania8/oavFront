import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../services/produit-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public libelle:string="";
  public displayProduit:boolean=false;
  public checkboxSante:string="";
  public checkboxPrevoyance:string="";

  constructor(private produitService:ProduitServiceService) { }

  ngOnInit(): void {
    console.log("produit component works");
  }
   i:number=0;
  OnclickBtnValideInfo(){

    this.produitService.getAllProducts().subscribe(result => {console.log(result);
      this.libelle= result[this.i].libelle;this.i++;});
     
     
  }

}
