import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitModel } from '../models/produitModel';
import { QuestionAvantVenteModel } from '../models/questionAvVenteModel';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<ProduitModel[]>{
    console.log("enter ProduitServiceService");
    const url ="http://localhost:8080/produit/getAllProducts";
    return this.http.get<ProduitModel[]>(url);
  }
}
