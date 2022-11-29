import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosdashboardComponent } from './proyectosdashboard.component';

describe('ProyectosdashboardComponent', () => {
  let component: ProyectosdashboardComponent;
  let fixture: ComponentFixture<ProyectosdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
