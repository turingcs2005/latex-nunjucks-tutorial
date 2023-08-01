import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureSetupComponent } from './infrastructure-setup.component';

describe('InfrastructureSetupComponent', () => {
  let component: InfrastructureSetupComponent;
  let fixture: ComponentFixture<InfrastructureSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfrastructureSetupComponent]
    });
    fixture = TestBed.createComponent(InfrastructureSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
