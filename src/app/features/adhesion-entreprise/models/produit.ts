import { TypeProduit } from "./typeProduit";

export class Produit{
    idProduit:number;
    codeProduit:number;
    libelle:string;
    typeProduit:TypeProduit;

    constructor(){
        this.idProduit=0;
        this.codeProduit=0;
        this.libelle="";
        this.typeProduit=new TypeProduit();
    }

}