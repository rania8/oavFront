import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../../services/produit-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public libelle:string="";

  constructor(private produitService:ProduitServiceService) { }

  ngOnInit(): void {
    console.log("produit component works");
  }

  OnclickBtnSuivant(){
    this.produitService.getAllProducts().subscribe(result => {console.log(result);
      this.libelle= result[0].libelle;});
     //
     
  }

}
