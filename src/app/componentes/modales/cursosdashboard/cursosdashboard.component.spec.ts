import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosdashboardComponent } from './cursosdashboard.component';

describe('CursosdashboardComponent', () => {
  let component: CursosdashboardComponent;
  let fixture: ComponentFixture<CursosdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
