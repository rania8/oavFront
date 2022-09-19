import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrepriseModel } from '../models/entrepriseModel';
import { PackModel } from '../models/PackModel';

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

}
