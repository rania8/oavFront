import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntrepriseINSEE } from '../models/entrepriseINSEE';
@Injectable({
  providedIn: 'root'
})
export class SiretServiceService {

  constructor(private http: HttpClient) { }
  getInformations(siret: string): Observable<EntrepriseINSEE> {
    console.log("enter SiretServiceService");
    const url = "http://localhost:8080/entreprise/getINSEEinformations";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("siret", siret);
    return this.http.get<EntrepriseINSEE>(url, { params: queryParams, headers: httpHeader });
  }

  checkValuedSiret(siretValue: string): boolean {
    let rslt: boolean = false;
    if (siretValue != "") {
      rslt = true;
      //console.log("checkValuedSiret "+rslt);
    }
    return rslt;
  }

}
