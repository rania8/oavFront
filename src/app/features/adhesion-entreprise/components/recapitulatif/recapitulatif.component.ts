import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecapModel } from '../../models/RecapModel';
import { SiretServiceService } from '../../services/entreprise-service.service';
import { PackService } from '../../services/pack.service';


@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  nomentreprise = '';
  packs: RecapModel[] = [];


  constructor(private packService: PackService, private entrepriseService: SiretServiceService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    const idEntreprise = parseInt(this._Activatedroute.snapshot.paramMap.get("id"), 10);
    this.nomentreprise =  this._Activatedroute.snapshot.paramMap.get("raisonSociale")
    this.packService.getRecap(idEntreprise).subscribe(rst => {
      this.packs = rst;
    })
  }

  printComponent(cmpName: string) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

}
