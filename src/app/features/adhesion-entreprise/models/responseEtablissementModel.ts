import { SiretServiceService } from "../services/entreprise-service.service";
import { AdresseModel } from "./adresseModel";
import { UniteLegaleModel } from "./uniteLegaleModel";
export class ReponseEtablissementModel{
    siret : string;
    activitePrincipaleRegistreMetiersEtablissement:string;
    uniteLegale: UniteLegaleModel;
    adresseEtablissement: AdresseModel;
    constructor(){
        this.uniteLegale=new UniteLegaleModel();
        this.adresseEtablissement= new AdresseModel();
        this.siret="";
        this.activitePrincipaleRegistreMetiersEtablissement="";

    }

}
