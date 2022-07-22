import { Component, OnInit } from '@angular/core';
import { SiretServiceService } from '../services/siret-service.service';
import { EntrepriseINSEE } from '../models/entrepriseINSEE';
import { ReponseEtablissement } from '../models/responseEtablissement';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-siret-validation',
  templateUrl: './siret-validation.component.html',
  styleUrls: ['./siret-validation.component.css']
})
export class SiretValidationComponent implements OnInit {
  public siretValue: string = "";
  public raisonSocialeValue: string = "";
  public apeValue: string = "";
  public adresseValue: string = "";
  public codePostaleValue: string = "";
  public etablissement: ReponseEtablissement = new ReponseEtablissement();

  public displayInfo: boolean = false;
  public displaySuivantBtn:boolean=false;

  reactiveForm?:FormGroup;




  constructor(private siretService: SiretServiceService) { 
   
    }
  

//get f(){return this.reactiveForm?.controls}

  ngOnInit(): void {
    console.log("siret-validation component works");
  }

  onClickBtnValide() {
    if (this.siretService.checkValuedSiret(this.siretValue) == true) {
      this.displayInfo=this.siretService.checkValuedSiret(this.siretValue);
      this.displaySuivantBtn=this.siretService.checkValuedSiret(this.siretValue);

      console.log("siret value is " + this.siretValue);
      this.siretService.getInformations(this.siretValue).subscribe(result => {
        console.log(result);
        this.etablissement = result.etablissements[0];
        this.etablissement.adresseEtablissement.totaleAdresse = this.etablissement.adresseEtablissement.numeroVoieEtablissement + " " + this.etablissement.adresseEtablissement.typeVoieEtablissement + " " + this.etablissement.adresseEtablissement.libelleVoieEtablissement + " " + this.etablissement.adresseEtablissement.libelleCommuneEtablissement;
      });
    }
    //else pop up veillez tapez votre siret + check 14 chiffres
  }



}
