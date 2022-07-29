import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntrepriseINSEE } from '../models/entrepriseINSEE';
import { Entreprise } from '../models/entreprise';
@Injectable({
  providedIn: 'root'
})
export class SiretServiceService {

  constructor(private http: HttpClient) { }
  getInformations(siret: string): Observable<EntrepriseINSEE> {
    console.log("enter getInformationsService");
    const url = "http://localhost:8080/entreprise/getINSEEinformations";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("siret", siret);
    return this.http.get<EntrepriseINSEE>(url, { params: queryParams, headers: httpHeader });
  }

  addEntreprise(entreprise:Entreprise): Observable<Entreprise>{
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
    return this.http.post<Entreprise>(url, body, { headers: httpHeader });



  }
  updateEntreprise(entreprise: Entreprise): Observable<Entreprise> {

    console.log("enter updateEntrepriseService");
    const url = "http://localhost:8080/entreprise/modifyEntreprise";

    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    const body = {
      siret: entreprise.siret,
      raisonSociale: entreprise.raisonSociale,
      ape: entreprise.ape,
      numeroVoieEtablissement: entreprise.numeroVoieEtablissement,
      typeVoieEtablissement: entreprise.typeVoieEtablissement,
      libelleVoieEtablissement: entreprise.libelleVoieEtablissement,
      libelleCommuneEtablissement: entreprise.libelleCommuneEtablissement,
      codePostal: entreprise.codePostal
    }
    //let queryParams = new HttpParams();
    //queryParams = queryParams.append("siret", entreprise.siret)
    //.append("raisonSociale",entreprise.raisonSociale)
    // .append("ape",entreprise.ape)
    // .append("numeroVoieEtablissement",entreprise.numeroVoieEtablissement)
    //.append("typeVoieEtablissement",entreprise.typeVoieEtablissement)
    // .append("libelleVoieEtablissement",entreprise.libelleVoieEtablissement)
    // .append("libelleCommuneEtablissement",entreprise.libelleCommuneEtablissement)
    // .append("codePostal",entreprise.codePostal);
    return this.http.put<Entreprise>(url, body, { headers: httpHeader });

  }


}
