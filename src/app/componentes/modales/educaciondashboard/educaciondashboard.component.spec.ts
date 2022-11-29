import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaciondashboardComponent } from './educaciondashboard.component';

describe('EducaciondashboardComponent', () => {
  let component: EducaciondashboardComponent;
  let fixture: ComponentFixture<EducaciondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducaciondashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducaciondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
