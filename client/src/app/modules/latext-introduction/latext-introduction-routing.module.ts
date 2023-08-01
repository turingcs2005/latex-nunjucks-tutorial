import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatextIntroductionComponent } from './latext-introduction.component';

const routes: Routes = [{ path: '', component: LatextIntroductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatextIntroductionRoutingModule { }
