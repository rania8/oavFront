import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosGeneralesComponent } from './infos-generales.component';

describe('InfosGeneralesComponent', () => {
  let component: InfosGeneralesComponent;
  let fixture: ComponentFixture<InfosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosGeneralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
