import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntrepriseINSEEModel } from '../models/entrepriseINSEEModel';
import { EntrepriseModel } from '../models/entrepriseModel';
@Injectable({
  providedIn: 'root'
})
export class SiretServiceService {

  constructor(private http: HttpClient) { }
  getInformations(siret: string): Observable<EntrepriseINSEEModel> {
    console.log("enter getInformationsService");
    const url = "http://localhost:8080/entreprise/getINSEEinformations";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("siret", siret);
    return this.http.get<EntrepriseINSEEModel>(url, { params: queryParams, headers: httpHeader });
  }

  addEntreprise(entreprise:EntrepriseModel): Observable<EntrepriseModel>{
    console.log("enter addEntrepriseService");
    const url = "http://localhost:8080/entreprise/createEntreprise";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    const body = {
      siret: entreprise.siret,
      raisonSociale: entreprise.raisonSociale,
      ape: entreprise.ape,
      numeroVoieEtablissement: entreprise.numeroVoieEtablissement,
      typeVoieEtablissement: entreprise.typeVoieEtablissement,
      libelleVoieEtablissement: entreprise.libelleVoieEtablissement,
      libelleCommuneEtablissement: entreprise.libelleCommuneEtablissement,
      codePostal: entreprise.codePostal,
    }
    return this.http.post<EntrepriseModel>(url, entreprise, { headers: httpHeader });
  }
  updateEntreprise(entreprise: EntrepriseModel): Observable<EntrepriseModel> {
    console.log("enter updateEntreprise");

    const url = "http://localhost:8080/entreprise/modifyEntreprise";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<EntrepriseModel>(url, entreprise, { headers: httpHeader });



  

  }


}
