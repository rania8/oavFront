import { AdresseModel } from "./adresseModel";
import { ProduitModel } from "./produitModel";
import { QuestionAvantVenteModel } from "./questionAvVenteModel";

export class EntrepriseModel {
    idEntreprise: number;
    siret: string;
    raisonSociale: string;
    ape: string;
    adresse: string;
    totaleAdresse: string;
    numeroVoieEtablissement: string;
    typeVoieEtablissement: string;
    libelleVoieEtablissement: string;
    libelleCommuneEtablissement: string;
    codePostal: string;
    mail: string;
    tel: number;

    productsSelected: ProduitModel[];
    // questionsResponded:QuestionAvantVenteModel[];


    constructor() {
        this.idEntreprise = 0;
        this.siret = "";
        this.raisonSociale = "";
        this.ape = "";
        this.adresse = "";
        this.totaleAdresse = "";
        this.numeroVoieEtablissement = "";
        this.typeVoieEtablissement = "";
        this.libelleCommuneEtablissement = "";
        this.libelleVoieEtablissement = "";
        this.mail = ""
        this.tel = 0;
        this.codePostal = "";
        this.productsSelected = [];
        //  this.questionsResponded = null;
    }
}