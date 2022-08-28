export class DetCotModel {
    period: number;
    catTarDetCf: string;
    catTarDetType: string;
    catTarDetAgeMin: number;
    catTarDetAgeMax: number;
    catTarDetOrdre: number;
    mntCotPourcent: number;
    mntCotMontant: number;
    mntCotPTa: number;
    mntCotPTb: number;
    mntCotPTc: number;
    partGrpp: number;
    partSalp: number;
    partGrp: number;
    partSal: number;
    mntPerEurHT: number;
    mntPerEurTTC: number;
    mntPerEurHTRem: number;
    mntPerEurTTCRem: number;
    mntAnEurHT: number;
    mntAnEurTTC: number;
    mntAnEurHTRem: number;
    mntAnEurTTCRem: number;
    nbEnfants: number;
    nbPersCot: number;
    mntCotTotal: number;

    constructor() {
        this.period = 0;
        this.catTarDetCf = "";
        this.catTarDetType = "";
        this.catTarDetAgeMax = 0;
        this.catTarDetAgeMin = 0;
        this.catTarDetOrdre = 0;
        this.mntCotPourcent = 0;
        this.mntCotMontant = 0;
        this.mntCotPTa = 0;
        this.mntCotPTb = 0;
        this.mntCotPTc = 0;
        this.partGrpp = 0;
        this.partSalp = 0
        this.partGrp = 0;
        this.partSal = 0;
        this.mntPerEurHT = 0;
        this.mntPerEurTTC = 0;
        this.mntPerEurHTRem = 0;
        this.mntPerEurTTCRem = 0;
        this.mntAnEurHT = 0;
        this.mntAnEurTTC = 0;
        this.mntAnEurHTRem = 0;
        this.mntAnEurTTCRem = 0;
        this.nbEnfants = 0;
        this.nbPersCot = 0;
        this.mntCotTotal = 0;
    }

}