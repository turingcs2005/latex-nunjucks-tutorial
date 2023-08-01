import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatextIntroductionComponent } from './latext-introduction.component';

describe('LatextIntroductionComponent', () => {
  let component: LatextIntroductionComponent;
  let fixture: ComponentFixture<LatextIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatextIntroductionComponent]
    });
    fixture = TestBed.createComponent(LatextIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
