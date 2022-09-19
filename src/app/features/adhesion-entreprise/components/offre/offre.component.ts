import { Component, Input, OnInit } from '@angular/core';
import { OffreModel } from '../../models/OffreModel';
import { PackModel } from '../../models/PackModel';
import { TarifsParamsModel } from '../../models/tarifsParamsModel';
import { TarifsRetourModel } from '../../models/tarifsRetourModel';
import { OffreService } from '../../services/offre.service';
import { PackService } from '../../services/pack.service';
import { TarificationServiceService } from '../../services/tarification-service.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {


  @Input() idEntreprise: number;
  selectedProduct = 1;
  produits: any[] = []
  offres: OffreModel[] = [];
  garanties: string[] = [];
  structures: string[] = ['composition', 'isoleFamille', 'uniforme', 'adultEnfant'];
  selectedPack: PackModel[] = [];

  tarifParamsModel: TarifsParamsModel = new TarifsParamsModel;
  garantieByProduct: Map<string, String> = new Map();
  propositionByProduct: Map<string, PackModel> = new Map();
  tarifsRetour: TarifsRetourModel;
  collegeOffre1 = 1;
  collegeOffre2 = 1;
  collegeOffre3 = 1;
  customClass: string = 'customClass';
  colleges: any[] = [];
  isFirstOpen: boolean = true;
  constructor(private tarificationService: TarificationServiceService, private offreService: OffreService, private packService: PackService) { }

  ngOnInit(): void {
    this.produits.push({ id: 1, text: 'Sante' });
    this.produits.push({ id: 2, text: 'Prévoyance' });
    this.colleges.push({ id: 1, text: 'Cadre' });
    this.colleges.push({ id: 2, text: 'Non cadre' });
    this.colleges.push({ id: 3, text: 'Cadre & non cadre' });
    this.offreService.getOffres(this.idEntreprise).subscribe(rslt => {
      this.offres = rslt;
      this.garanties = this.offres[0].garanties.map(el => el.libelle);
    });
  }

  getUniforme(indexOffre: number): string {
    const offre: OffreModel = this.offres[indexOffre];
    return offre.structureCotisation.uniforme;
  }
  getAdultEnfant(indexOffre: number): string {
    const offre: OffreModel = this.offres[indexOffre];
    return offre.structureCotisation.adultEnfant;
  }

  getIsoleFamille(indexOffre: number): string {
    const offre: OffreModel = this.offres[indexOffre];
    return offre.structureCotisation.isoleFamille;
  }

  getComposition(indexOffre: number): string {
    const offre: OffreModel = this.offres[indexOffre];
    return offre.structureCotisation.composition;
  }


  getDescription(indexOffre: number, garantie: string): string {
    const offre: OffreModel = this.offres[indexOffre];
    return offre.garanties.find(el => el.libelle === garantie).description;
  }

  onClickBtnTarifs() {
    console.log(this.tarifsRetour);
  }

  selectOffre3() {
    const pack = new PackModel(this.idEntreprise, this.offres[2].id, this.collegeOffre3);
    this.packService.add(pack).subscribe(result => { });
  }
  selectOffre2() {
    const pack = new PackModel(this.idEntreprise, this.offres[1].id, this.collegeOffre2);
    this.packService.add(pack).subscribe(result => { });
  }
  selectOffre1() {
    const pack = new PackModel(this.idEntreprise, this.offres[0].id, this.collegeOffre1);
    this.packService.add(pack).subscribe(result => { });
  }


}
