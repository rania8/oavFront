import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionAvantVenteModel } from '../models/questionAvVenteModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }
  getAllQuestions(): Observable<QuestionAvantVenteModel>{
    console.log("enter QuestionServiceService");
    const url ="http://localhost:8080/question//getAllQuestions";
    return this.http.get<QuestionAvantVenteModel>(url);

    

  }
}
