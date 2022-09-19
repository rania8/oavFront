import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrepriseModel } from '../models/entrepriseModel';
import { PackModel } from '../models/PackModel';
import { RecapModel } from '../models/RecapModel';

@Injectable({
  providedIn: 'root'
})
export class PackService {


  constructor(private http: HttpClient) { }


  add(pack: PackModel): Observable<PackModel> {
    const url = "http://localhost:8080/pack/";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<PackModel>(url, pack, { headers: httpHeader });
  }

  delete(pack: PackModel): Observable<any> {
    const url = "http://localhost:8080/pack/";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idCollege", pack.idCollege);
    queryParams = queryParams.append("idEntreprise", pack.idEntreprise);
    queryParams = queryParams.append("idOffre", pack.idOffre);
    return this.http.delete<any>(url, { params: queryParams, headers: httpHeader });

  }

  getRecap(idEntreprise: number): Observable<RecapModel[]> {
    console.log("enter getInformationsService");
    const url = "http://localhost:8080/pack/";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idEntreprise", idEntreprise);
    return this.http.get<RecapModel[]>(url, { params: queryParams, headers: httpHeader });
  }

}
