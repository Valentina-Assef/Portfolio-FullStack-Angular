import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasdashboardComponent } from './idiomasdashboard.component';

describe('IdiomasdashboardComponent', () => {
  let component: IdiomasdashboardComponent;
  let fixture: ComponentFixture<IdiomasdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
