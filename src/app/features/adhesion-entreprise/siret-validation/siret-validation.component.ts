import { Component, OnInit } from '@angular/core';
import { SiretServiceService } from '../services/siret-service.service';
import { InformationsServiceService } from '../services/informations-service.service';

@Component({
  selector: 'app-siret-validation',
  templateUrl: './siret-validation.component.html',
  styleUrls: ['./siret-validation.component.css']
})
export class SiretValidationComponent implements OnInit {
  public siretValue: string = "";
  public raisonSocialeValue: string = "";
  public apeValue: string = "";
  public adresseValue: string = "";
  public codePostaleValue: string = "";





  constructor(private siretService:SiretServiceService,private informationsService:InformationsServiceService) { }

  ngOnInit(): void {
    console.log("it works");
  }

  onClickBtnValide(){
    console.log(this.siretValue);
    this.siretService.getInformations(this.siretValue).subscribe(result=>{console.log(result)});
    //this.informationsService.fillInformations(this.siretValue).subscribe(result=>{console.log(result)});

  }

}
