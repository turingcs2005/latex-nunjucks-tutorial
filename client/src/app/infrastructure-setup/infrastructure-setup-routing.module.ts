import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfrastructureSetupComponent } from './infrastructure-setup.component';

const routes: Routes = [{ path: '', component: InfrastructureSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureSetupRoutingModule { }
