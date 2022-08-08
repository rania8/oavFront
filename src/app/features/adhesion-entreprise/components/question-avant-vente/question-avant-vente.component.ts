import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EntrepriseModel } from '../../models/entrepriseModel';
import { QuestionAvantVenteModel } from '../../models/questionAvVenteModel';
import { QuestionServiceService } from '../../services/question-service.service';

@Component({
  selector: 'app-question-avant-vente',
  templateUrl: './question-avant-vente.component.html',
  styleUrls: ['./question-avant-vente.component.css']
})
export class QuestionAvantVenteComponent implements OnInit {
  @Input("entrepriseCreated") entreprise: EntrepriseModel;
  listQuestions: QuestionAvantVenteModel[];
  taille: number;
  constructor(private questionService: QuestionServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    //i want to detect changes from a variable entreprise decorated by @Input
    console.log(changes)
  }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe(rslt => {
      this.listQuestions = rslt;
      this.taille = rslt.length;
    });
  }
  

}
