import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrepriseINSEEModel } from '../models/entrepriseINSEEModel';
import { OffreModel } from '../models/OffreModel';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }
  getOffres(idEntreprise: number): Observable<OffreModel[]> {
    console.log("enter getInformationsService");
    const url = "http://localhost:8080/offre/";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idEntreprise", idEntreprise);
    return this.http.get<OffreModel[]>(url, { params: queryParams, headers: httpHeader });
  }
}
