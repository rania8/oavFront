import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiretValidationComponent } from './siret-validation.component';

describe('SiretValidationComponent', () => {
  let component: SiretValidationComponent;
  let fixture: ComponentFixture<SiretValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiretValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiretValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
