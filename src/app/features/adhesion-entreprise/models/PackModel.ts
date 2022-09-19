import { GarantieModel } from './GarantieModel';

export class PackModel {
    idEntreprise: number;
    idOffre: number;
    idCollege: number;
    idProduit?: number;

    constructor(idEntreprise: number,
        idOffre: number,
        idCollege: number, idPorduit: number) {
        this.idEntreprise = idEntreprise;
        this.idOffre = idOffre;
        this.idCollege = idCollege;
        this.idProduit = idPorduit;
    }

}