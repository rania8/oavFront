import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionAvantVente } from '../models/questionAvVente';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }
  getAllQuestions(): Observable<QuestionAvantVente>{
    console.log("enter QuestionServiceService");
    const url ="http://localhost:8080/question//getAllQuestions";
    return this.http.get<QuestionAvantVente>(url);

    

  }
}
