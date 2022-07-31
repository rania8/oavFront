import { ReponseAvantVenteModel } from "./reponseAvVenteModel";

export class QuestionAvantVenteModel{
    idQuestion:number;
    codeQuestion:number;
    enonce : string;
    reponses:ReponseAvantVenteModel[];

    constructor(){
        this.idQuestion=0;
        this.codeQuestion=0;
        this.enonce="";
        this.reponses=[];
    }
}