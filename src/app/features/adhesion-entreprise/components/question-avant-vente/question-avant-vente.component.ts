import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../../services/question-service.service';

@Component({
  selector: 'app-question-avant-vente',
  templateUrl: './question-avant-vente.component.html',
  styleUrls: ['./question-avant-vente.component.css']
})
export class QuestionAvantVenteComponent implements OnInit {

  constructor(private questionService:QuestionServiceService) { }

  ngOnInit(): void {
    console.log("question component works");

  }

}
