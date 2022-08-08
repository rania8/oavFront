import { EntrepriseQuestionIdModel } from "./entrepriseQuestionIdModel";

export class EntrepriseQuestionModel{
    entrepriseQuestionId:EntrepriseQuestionIdModel;
   
    constructor(id:EntrepriseQuestionIdModel){
        this.entrepriseQuestionId=id;
    }
}