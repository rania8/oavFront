import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EntrepriseQuestionModel } from '../models/entrepriseQuestionModel';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseQuestionServiceService {

  constructor(private http:HttpClient) { }

 

saveResponses(listEntrepriseQuestion:EntrepriseQuestionModel[]): Observable<EntrepriseQuestionModel[]>{
  console.log("enter saveResponsesService");
  const url = "http://localhost:8080/entrepriseQuestion/saveReponse";
  const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.post<EntrepriseQuestionModel[]>(url, listEntrepriseQuestion, { headers: httpHeader });
}

}
