import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUserDashboardComponent } from './feature-user-dashboard.component';

describe('FeatureUserDashboardComponent', () => {
  let component: FeatureUserDashboardComponent;
  let fixture: ComponentFixture<FeatureUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUserDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
