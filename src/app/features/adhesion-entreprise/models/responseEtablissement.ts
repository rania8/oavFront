import { SiretServiceService } from "../services/siret-service.service";
import { Adresse } from "./adresse";
import { UniteLegale } from "./uniteLegale";
export class ReponseEtablissement{
    siret : string;
    activitePrincipaleRegistreMetiersEtablissement:string;
    uniteLegale: UniteLegale;
    adresseEtablissement: Adresse;
    constructor(){
        this.uniteLegale=new UniteLegale();
        this.adresseEtablissement= new Adresse();
        this.siret="";
        this.activitePrincipaleRegistreMetiersEtablissement="";

    }

}
