import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SiretServiceService {

  constructor(private http: HttpClient) { }
  getInformations(siret:string): Observable<any>{
    console.log("entre service");
    //this.http.get("http://localhost:8080/entreprise/getINSEEinformations")
    const url ="http://localhost:8080/entreprise/getINSEEinformations"

    let queryParams = new HttpParams();
    queryParams = queryParams.append("siret",siret);

  return this.http.get(url,{params:queryParams});
  
  }

}
