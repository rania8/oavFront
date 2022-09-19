import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { EntrepriseModel } from '../../models/entrepriseModel';
import { EntrepriseQuestionIdModel } from '../../models/entrepriseQuestionIdModel';
import { EntrepriseQuestionModel } from '../../models/entrepriseQuestionModel';
import { QuestionAvantVenteModel } from '../../models/questionAvVenteModel';
import { EntrepriseQuestionServiceService } from '../../services/entreprise-question-service.service';
import { QuestionServiceService } from '../../services/question-service.service';

@Component({
  selector: 'app-question-avant-vente',
  templateUrl: './question-avant-vente.component.html',
  styleUrls: ['./question-avant-vente.component.css']
})
export class QuestionAvantVenteComponent implements OnInit {
  @Input("entrepriseCreated") entreprise: EntrepriseModel;
  showOffre: boolean = false;
  listQuestions: QuestionAvantVenteModel[];
  taille: number;

  constructor(private questionService: QuestionServiceService, private questionEntrepriseService: EntrepriseQuestionServiceService,  
    private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe(rslt => {
      this.listQuestions = rslt;
      this.taille = rslt.length;
    });
  }

  valider() {
    console.log(this.listQuestions);
    let listofEntrepriseQuestion: EntrepriseQuestionModel[] = [];

    // for (let i = 0; i < this.taille; i++) {
    //   let entrepriseQuestion: EntrepriseQuestionModel = new EntrepriseQuestionModel();
    //   for (let j = 0; j < this.listQuestions[i].reponses.length; j++) {
    //     if (this.listQuestions[i].reponses[j].checked) {
    //       entrepriseQuestion.idReponse = this.listQuestions[i].reponses[j].idRepAv;
    //       entrepriseQuestion.idQuestion = this.listQuestions[i].idQuestion;
    //       entrepriseQuestion.idEntreprise = this.entreprise.idEntreprise;
    //       listofEntrepriseQuestion.push(entrepriseQuestion)
    //     }
    //   }
    // }

    this.listQuestions.forEach(eltEntrepriseQuestion => {
      let entrepriseQuestion: EntrepriseQuestionModel = new EntrepriseQuestionModel();
      eltEntrepriseQuestion.reponses.forEach(elt => {
        if (elt.checked) {
          entrepriseQuestion.idReponse = elt.idRepAv;
          entrepriseQuestion.idQuestion = eltEntrepriseQuestion.idQuestion;
          entrepriseQuestion.idEntreprise = this.entreprise.idEntreprise;
          listofEntrepriseQuestion.push(entrepriseQuestion)
        }

      })
    })
    this.questionEntrepriseService.saveResponses(listofEntrepriseQuestion).subscribe(rslt => {
      this.notificationsService.success("Sauvegarde effectué avec succès");
      this.showOffre = true;
    });
  
  }

}
