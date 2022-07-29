import { Adresse } from "./adresse";

export class Entreprise{
    idEntreprise:number;
    siret:string;
    raisonSociale:string;
    ape:string;
    totaleAdresse: string;
    numeroVoieEtablissement:string;
    typeVoieEtablissement:string;
    libelleVoieEtablissement:string;
    libelleCommuneEtablissement:string;
    codePostal:string;
    mail:string;
    tel:number;
    

    constructor(){
        this.idEntreprise=0;
        this.siret="";
        this.raisonSociale="";
        this.ape="";
        this.totaleAdresse="";
        this.numeroVoieEtablissement="";
        this.typeVoieEtablissement="";
        this.libelleCommuneEtablissement="";
        this.libelleVoieEtablissement="";
        this.mail=""
        this.tel=0;
        this.codePostal="";
    }
}