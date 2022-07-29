import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAvantVenteComponent } from './question-avant-vente.component';

describe('QuestionAvantVenteComponent', () => {
  let component: QuestionAvantVenteComponent;
  let fixture: ComponentFixture<QuestionAvantVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAvantVenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAvantVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
