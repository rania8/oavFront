import { Component, OnInit } from '@angular/core';
import { SiretServiceService } from '../services/siret-service.service';

@Component({
  selector: 'app-siret-validation',
  templateUrl: './siret-validation.component.html',
  styleUrls: ['./siret-validation.component.css']
})
export class SiretValidationComponent implements OnInit {
  public siretValue: string = "";
  constructor(private siretService:SiretServiceService) { }

  ngOnInit(): void {
    console.log("it works");
  }

  onClickBtnValide(){
    console.log(this.siretValue);
    this.siretService.getInformations(this.siretValue).subscribe(result=>{console.log(result)});

  }

}
