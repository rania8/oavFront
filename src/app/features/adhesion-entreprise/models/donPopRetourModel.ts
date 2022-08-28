import { DonTarModel } from "./donTarModel";

export class DonPopRetourModel {
    numOrg: number;
    typPrd: string;
    vrsPrd: string;
    datEffCtr: string;
    baseCot: number;
    massSalTrA: number;
    massSalTrB: number;
    massSalTrC: number;
    crit1: string;
    crit2: string;
    crit3: string;
    crit4: string;
    crit5: string;
    crit6: string;
    crit7: string;
    crit8: string;
    crit9: string;
    crit10: string;
    codePostal: string;
    mtPmss: number;
    donTar: DonTarModel;
    constructor() {
        this.numOrg = 0;
        this.typPrd = "";
        this.vrsPrd = "";
        this.datEffCtr = "";
        this.baseCot = 0;
        this.massSalTrA = 0;
        this.massSalTrB = 0;
        this.massSalTrC = 0;
        this.crit1 = "";
        this.crit2 = "";
        this.crit3 = "";
        this.crit4 = "";
        this.crit5 = "";
        this.crit6 = "";
        this.crit7 = "";
        this.crit8 = "";
        this.crit9 = "";
        this.crit10 = "";
        this.codePostal = "";
        this.mtPmss = 0;
        this.donTar = new DonTarModel();
    }
}