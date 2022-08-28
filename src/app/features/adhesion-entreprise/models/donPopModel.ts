import { DonDmgModel } from "./donDmgModel";
import { DonRemModel } from "./donRemModel";

export class DonPopModel{
    numOrg:number;
    typPrd:string;
    vrsPrd:string;
    datEffCtr:string;
    baseCot:string;
    massSalTrA:number;
    massSalTrB:number;
    massSalTrC:number;
    crit1:string;
    crit2:string;
    crit3:string;
    crit4:string;
    crit5:string;
    crit6:string;
    crit7:string;
    crit8:string;
    crit9:string;
    crit10:string;
    donRem:DonRemModel;
    donDmg:DonDmgModel;
constructor(){
    this.numOrg=0;
    this.typPrd="";
    this.vrsPrd="";
    this.datEffCtr="";
    this.baseCot="";
    this.massSalTrA=0;
    this.massSalTrB=0;
    this.massSalTrC=0;
    this.crit1="";
    this.crit2="";
    this.crit3="";
    this.crit4="";
    this.crit5="";
    this.crit6="";
    this.crit7="";
    this.crit8="";
    this.crit9="";
    this.crit10="";
    this.donRem=new DonRemModel();
    this.donDmg=new DonDmgModel();
}
}