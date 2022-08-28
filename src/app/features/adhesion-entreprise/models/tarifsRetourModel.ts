import { DonPopRetourModel } from "./donPopRetourModel";
import { DonTechModel } from "./donTechModel";
import { ErreursParamsModel } from "./erreursParamsModel";

export class TarifsRetourModel {
    donTech: DonTechModel;
    donPop: DonPopRetourModel;
    erreursParams: ErreursParamsModel;
    constructor() {
        this.donTech=new DonTechModel();
    this.donPop=new DonPopRetourModel();
    this.erreursParams=new ErreursParamsModel();
    }
}