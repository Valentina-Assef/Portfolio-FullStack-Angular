import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsdashboardComponent } from './skillsdashboard.component';

describe('SkillsdashboardComponent', () => {
  let component: SkillsdashboardComponent;
  let fixture: ComponentFixture<SkillsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
