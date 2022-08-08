import { EntrepriseQuestionIdModel } from "./entrepriseQuestionIdModel";

export class EntrepriseQuestionModel{
    // entrepriseQuestionId:EntrepriseQuestionIdModel;
    // constructor(){
    //     this.entrepriseQuestionId=new EntrepriseQuestionIdModel();
    
    // }

    idEntreprise:number;
    idReponse:number;
    idQuestion:number;
    
    constructor(){
        this.idEntreprise=0;
        this.idReponse=0;
        this.idQuestion=0;
    }
}