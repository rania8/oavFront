import { TypeProduitModel } from "./typeProduitModel";

export class ProduitModel{
    idProduit:number;
    libelle:string;
    typeProduit:TypeProduitModel;

    constructor(){
        this.idProduit=0;
        this.libelle="";
        this.typeProduit=new TypeProduitModel();
    }

}