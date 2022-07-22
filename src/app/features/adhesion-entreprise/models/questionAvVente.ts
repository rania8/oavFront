import { ReponseAvantVente } from "./reponseAvVente";

export class QuestionAvantVente{
    idQuestion:number;
    codeQuestion:number;
    enonce : string;
    reponses:ReponseAvantVente[];

    constructor(){
        this.idQuestion=0;
        this.codeQuestion=0;
        this.enonce="";
        this.reponses=[];
    }
}