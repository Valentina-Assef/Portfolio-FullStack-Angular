import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentaciondashboardComponent } from './presentaciondashboard.component';

describe('PresentaciondashboardComponent', () => {
  let component: PresentaciondashboardComponent;
  let fixture: ComponentFixture<PresentaciondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentaciondashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentaciondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
