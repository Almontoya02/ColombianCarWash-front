import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLavadosComponent } from './card-lavados.component';

describe('CardLavadosComponent', () => {
  let component: CardLavadosComponent;
  let fixture: ComponentFixture<CardLavadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLavadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLavadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
