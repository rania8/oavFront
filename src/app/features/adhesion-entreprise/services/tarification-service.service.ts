import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarifsParamsModel } from '../models/tarifsParamsModel';
import { TarifsRetourModel } from '../models/tarifsRetourModel';

@Injectable({
  providedIn: 'root'
})
export class TarificationServiceService {

  constructor(private http: HttpClient) {  }
  getTarif(tarifsParamsModel:TarifsParamsModel ):Observable<TarifsRetourModel>{
    console.log("enter getTarifService");

    const url = "http://localhost:8080/tarif/getTarif";
    const httpHeader = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const body = {"flxColl": {
      "donTech": {
          "idFlx": "Flx.Tarif.COLL",
          "idVrsFlx": "2",
          "calculMnt": "0",
          "affCrit": "1"
      },
      "donPop": {
          "numOrg": "1",
          "typPrd": "ENTSAN",
          "vrsPrd": "2022",
          "datEffCtr": "20220301",
          "crit1": "SSC321",
          "crit2": "1",
          "crit3": "AM",
          "crit4": "10",
          "crit5": "TIF",
          "crit6": "",
          "crit7": "",
          "crit8": "BASE"
      }
  }}
  return this.http.post<TarifsRetourModel>(url,body, { headers: httpHeader });
  }

}
