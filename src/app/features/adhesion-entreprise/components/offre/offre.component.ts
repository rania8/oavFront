import { Component, OnInit } from '@angular/core';
import { TarifsParamsModel } from '../../models/tarifsParamsModel';
import { TarifsRetourModel } from '../../models/tarifsRetourModel';
import { TarificationServiceService } from '../../services/tarification-service.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  tarifParamsModel:TarifsParamsModel=new TarifsParamsModel;
  tarifsRetour:TarifsRetourModel;
  customClass :string= 'customClass';

  isFirstOpen :boolean= true;
  constructor(private tarificationService: TarificationServiceService) { }

  ngOnInit(): void {
    this.tarificationService.getTarif(this.tarifParamsModel).subscribe(rslt => {
     this.tarifsRetour=rslt;
    });
  }
  onClickBtnTarifs(){
    console.log(this.tarifsRetour);
  }
}
