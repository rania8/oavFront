import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationsServiceService {

  constructor(private http: HttpClient) { }
  fillInformations(siret:string) {
  }
}
