import { GarantieModel } from "./GarantieModel";
import { StructureCotisationModel } from "./StructureCotisationModel";
import { TarificationModel } from "./TarificationModel";

export class OffreModel {
    id?:number;
    garanties?:GarantieModel[];
    idProduit?:number;
    libelle?:number;
    structureCotisation?:StructureCotisationModel;
    tarification?:TarificationModel;

}