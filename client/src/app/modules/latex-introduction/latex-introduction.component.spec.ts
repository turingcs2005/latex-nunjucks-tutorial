import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatexIntroductionComponent } from './latex-introduction.component';

describe('LatexIntroductionComponent', () => {
  let component: LatexIntroductionComponent;
  let fixture: ComponentFixture<LatexIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatexIntroductionComponent]
    });
    fixture = TestBed.createComponent(LatexIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
