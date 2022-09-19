import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { EntrepriseModel } from '../../models/entrepriseModel';
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


  @Input() entreprise: EntrepriseModel;
  selectedProduct = 1;
  produits: any[] = []
  offres: OffreModel[] = [];
  garanties: string[] = [];
  structures: string[] = ['composition', 'isoleFamille', 'uniforme', 'adultEnfant'];
  selectedPack: PackModel[] = [];
  showOffre1: boolean = true;
  showOffre2: boolean = true;
  showOffre3: boolean = true;
  packSlected: PackModel[] = []

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
  showInterface: boolean = false;
  constructor(private tarificationService: TarificationServiceService, private offreService: OffreService, private packService: PackService,
    private notificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
    this.fillProductList();
    this.fillCollegeList();
    this.getOffres();
  }

  private getOffres() {
    this.offreService.getOffres(this.entreprise.idEntreprise).subscribe(rslt => {
      this.showInterface = true;
      this.offres = rslt;
      this.garanties = this.offres[0].garanties.map(el => el.libelle);
    });
  }

  private fillCollegeList() {
    this.colleges.push({ id: 1, text: 'Cadre' });
    this.colleges.push({ id: 2, text: 'Non cadre' });
    this.colleges.push({ id: 3, text: 'Cadre & non cadre' });
  }

  private fillProductList() {
    this.entreprise.productsSelected.forEach(el => {
      this.produits.push({ id: el.idProduit, text: el.libelle });
    })
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
    const pack = new PackModel(this.entreprise.idEntreprise, this.offres[2].id, this.collegeOffre3, this.selectedProduct);
    if (this.checKValidite(pack)) {
      this.packService.add(pack).subscribe(result => {
        this.packSlected.push(pack);
        this.showOffre3 = false;
        this.notificationsService.success("Ajout effectué avec succès");
      });
    } else {
      this.notificationsService.alert("Un offre est déjà choisi pour ce collège");


    }
  }
  selectOffre2() {
    const pack = new PackModel(this.entreprise.idEntreprise, this.offres[1].id, this.collegeOffre2, this.selectedProduct);
    if (this.checKValidite(pack)) {
      this.packService.add(pack).subscribe(result => {
        this.packSlected.push(pack);
        this.showOffre2 = false;
        this.notificationsService.success("Ajout effectué avec succès");
      });
    } else {
      this.notificationsService.alert("Un offre est déjà choisi pour ce collège");


    }
  }

  selectOffre1() {
    const pack = new PackModel(this.entreprise.idEntreprise, this.offres[0].id, this.collegeOffre1, this.selectedProduct);
    if (this.checKValidite(pack)) {
      this.packService.add(pack).subscribe(result => {
        this.packSlected.push(pack);
        this.showOffre1 = false;
        this.notificationsService.success("Ajout effectué avec succès");

      });
    } else {
      this.notificationsService.alert("Un offre est déjà choisi pour ce collège");

    }
  }

  checKValidite(pack: PackModel): boolean {
    return !this.packSlected.find(el => (el.idCollege === pack.idCollege || el.idCollege === 3) && el.idProduit === pack.idProduit);
  }

  unselectOffre3() {
    const pack = new PackModel(this.entreprise.idEntreprise, this.offres[2].id, this.collegeOffre3, this.selectedProduct);

    this.packService.delete(pack).subscribe(result => {
      this.packSlected = this.packSlected.filter(el => el.idCollege !== pack.idCollege && el.idOffre !== pack.idOffre);
      this.showOffre3 = true;
      this.notificationsService.success("Suppression effectué avec succès");
    });
  }
  unselectOffre2() {
    const pack = new PackModel(this.entreprise.idEntreprise, this.offres[1].id, this.collegeOffre2, this.selectedProduct);
    this.packService.delete(pack).subscribe(result => {
      this.packSlected = this.packSlected.filter(el => el.idCollege !== pack.idCollege && el.idOffre !== pack.idOffre);
      this.showOffre2 = true;
      this.notificationsService.success("Suppression effectué avec succès");
    });
  }
  unselectOffre1() {
    const pack = new PackModel(this.entreprise.idEntreprise, this.offres[0].id, this.collegeOffre1, this.selectedProduct);
    this.packService.delete(pack).subscribe(result => {
      this.packSlected = this.packSlected.filter(el => el.idCollege !== pack.idCollege && el.idOffre !== pack.idOffre);
      this.showOffre1 = true;
      this.notificationsService.success("Suppression effectué avec succès");
    });
  }
  goToRecap() {
    this.router.navigate(['/recap',{ id :this.entreprise.idEntreprise , raisonSociale : this.entreprise.raisonSociale}]);
  }



}
