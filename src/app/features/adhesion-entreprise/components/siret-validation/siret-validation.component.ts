import { Component, OnInit } from '@angular/core';
import { SiretServiceService } from '../../services/entreprise-service.service';
import { EntrepriseINSEEModel } from '../../models/entrepriseINSEEModel';
import { ReponseEtablissementModel } from '../../models/responseEtablissementModel';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EntrepriseModel } from '../../models/entrepriseModel';
import { NotificationsService } from 'angular2-notifications';

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
  public etablissement: ReponseEtablissementModel = new ReponseEtablissementModel();
  public displayInfo: boolean = false;
  public displaySuivantBtn: boolean = false;

  showEnterSIRETError: boolean = false;
  showInvalideSIRETError: boolean = false;
  public displayProduit: boolean = false;
  public entreprise: EntrepriseModel = new EntrepriseModel();


  constructor(private siretService: SiretServiceService,private notificationsService: NotificationsService) {

  }



  ngOnInit(): void {

  }

  onClickBtnValideSIRET() {
    const inputSiretValid = this.checkValuedSiret(this.siretValue);
    if (inputSiretValid) {
      if (this.siretValue.length == 14) {
        this.displayInfo = inputSiretValid;
        this.displaySuivantBtn = inputSiretValid;
        this.showEnterSIRETError = false;
        this.showInvalideSIRETError = false;
        console.log("siret value is " + this.siretValue);
        this.siretService.getInformations(this.siretValue).subscribe(result => {
          console.log(result);
          this.etablissement = result.etablissements[0];
          this.etablissement.adresseEtablissement.totaleAdresse =
            this.etablissement.adresseEtablissement.numeroVoieEtablissement + " " +
            this.etablissement.adresseEtablissement.typeVoieEtablissement + " " +
            this.etablissement.adresseEtablissement.libelleVoieEtablissement + " " +
            this.etablissement.adresseEtablissement.libelleCommuneEtablissement;
        });
        /////////////
        this.entreprise.siret = this.siretValue;
        this.entreprise.ape = this.etablissement.uniteLegale.activitePrincipaleUniteLegale;
        this.entreprise.raisonSociale = this.etablissement.uniteLegale.denominationUniteLegale;
        this.entreprise.codePostal = this.etablissement.adresseEtablissement.codePostalEtablissement;
        this.entreprise.totaleAdresse = this.etablissement.adresseEtablissement.totaleAdresse;

        this.entreprise.numeroVoieEtablissement = this.etablissement.adresseEtablissement.numeroVoieEtablissement;
        this.entreprise.typeVoieEtablissement = this.etablissement.adresseEtablissement.typeVoieEtablissement;


        this.entreprise.libelleVoieEtablissement = this.etablissement.adresseEtablissement.libelleVoieEtablissement;


        this.entreprise.libelleCommuneEtablissement = this.etablissement.adresseEtablissement.libelleCommuneEtablissement;

        ///////////
        this.siretService.addEntreprise(this.entreprise).subscribe(rslt => {
          this.entreprise.siret = rslt.siret;
          this.entreprise.ape = rslt.ape;
          this.entreprise.raisonSociale = rslt.raisonSociale;
          this.entreprise.codePostal = rslt.codePostal;
          this.entreprise.totaleAdresse = rslt.numeroVoieEtablissement + "" + rslt.typeVoieEtablissement + "" + rslt.libelleVoieEtablissement + rslt.libelleCommuneEtablissement;
          this.entreprise.numeroVoieEtablissement = rslt.numeroVoieEtablissement;
          this.entreprise.typeVoieEtablissement = rslt.typeVoieEtablissement;
          this.entreprise.libelleVoieEtablissement = rslt.libelleVoieEtablissement;
          this.entreprise.libelleCommuneEtablissement = rslt.libelleCommuneEtablissement;


        })
      }
      else {
        this.showInvalideSIRETError = true;

      }
    }
    else {
      this.showEnterSIRETError = true;
    }
  }

  checkValuedSiret(siretValue: string): boolean {
    return siretValue != "";
  }

  onClickBtnValideInfo() {

    this.entreprise.siret = this.siretValue;
    this.entreprise.ape = this.etablissement.uniteLegale.activitePrincipaleUniteLegale;
    this.entreprise.raisonSociale = this.etablissement.uniteLegale.denominationUniteLegale;
    this.entreprise.codePostal = this.etablissement.adresseEtablissement.codePostalEtablissement;
    this.entreprise.totaleAdresse = this.etablissement.adresseEtablissement.totaleAdresse;

    this.entreprise.adresse = this.etablissement.adresseEtablissement.totaleAdresse;


    this.entreprise.numeroVoieEtablissement = this.etablissement.adresseEtablissement.numeroVoieEtablissement;
    this.entreprise.typeVoieEtablissement = this.etablissement.adresseEtablissement.typeVoieEtablissement;
    this.entreprise.libelleVoieEtablissement = this.etablissement.adresseEtablissement.libelleVoieEtablissement;
    this.entreprise.libelleCommuneEtablissement = this.etablissement.adresseEtablissement.libelleCommuneEtablissement;


    this.siretService.updateEntreprise(this.entreprise).subscribe(rslt => {
      this.notificationsService.success("Mise à jour avec succès");

      this.entreprise = rslt;
      this.entreprise.totaleAdresse = rslt.numeroVoieEtablissement + "" + rslt.typeVoieEtablissement + "" + rslt.libelleVoieEtablissement + rslt.libelleCommuneEtablissement; this.displayProduit = true;
      this.displayProduit = true;
    })
  }

}
