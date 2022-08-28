import { DetCotModel } from "./detCotModel";

export class DonTarDetModel{
    codeTar:string;
    libTar:string;
    dtEffet:string;
    codeOpt:string;
    libOpt:string;
    libTarMode:string;
    tarMode:string;
    nbGratuit:number;
    ageLimEnf:number;
    regime:string;
    crit01:string;
    crit02:string;
    crit03:string;
    crit04:string;
    crit05:string;
    crit06:string;
    crit07:string;
    crit08:string;
    crit09:string;
    crit10:string;
    assiette:string;
    detCot:DetCotModel[];
    constructor(){
        this.codeTar="";
        this.libTar="";
        this. dtEffet="";
        this.codeOpt="";
        this.libOpt="";
        this.libTarMode="";
        this. tarMode="";
        this.nbGratuit=0;
        this.ageLimEnf=0;
        this.regime="";
        this.crit01="";
        this.crit02="";
        this. crit03="";
        this.crit04="";
        this.crit05="";
        this.crit06="";
        this.crit07="";
        this. crit08="";
        this.crit09="";
        this.crit10="";
        this. assiette="";
        this.detCot=[];
    }
}