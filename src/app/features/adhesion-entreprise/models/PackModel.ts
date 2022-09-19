import { GarantieModel } from './GarantieModel';

export class PackModel {
    idEntreprise: number;
    idOffre: number;
    idCollege: number;

    constructor(idEntreprise: number,
        idOffre: number,
        idCollege: number) {
        this.idEntreprise = idEntreprise;
        this.idOffre = idOffre;
        this.idCollege = idCollege;
    }

}