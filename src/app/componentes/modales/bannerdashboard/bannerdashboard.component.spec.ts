import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerdashboardComponent } from './bannerdashboard.component';

describe('BannerdashboardComponent', () => {
  let component: BannerdashboardComponent;
  let fixture: ComponentFixture<BannerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
