import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciadashboardComponent } from './experienciadashboard.component';

describe('ExperienciadashboardComponent', () => {
  let component: ExperienciadashboardComponent;
  let fixture: ComponentFixture<ExperienciadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciadashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
