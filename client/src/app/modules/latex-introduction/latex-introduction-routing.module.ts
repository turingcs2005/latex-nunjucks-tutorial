import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatexIntroductionComponent } from './latex-introduction.component';

const routes: Routes = [{ path: '', component: LatexIntroductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatexIntroductionRoutingModule { }
