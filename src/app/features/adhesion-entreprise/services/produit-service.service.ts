import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { QuestionAvantVente } from '../models/questionAvVente';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private http: HttpClient) { }


  getAllQuestions(): Observable<Produit>{
    console.log("enter ProduitServiceService");
    const url ="http://localhost:8080/produit/getAllProducts";
    return this.http.get<Produit>(url);
  }
}
