import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'infrastructure-setup', loadChildren: () => import('./infrastructure-setup/infrastructure-setup.module').then(m => m.InfrastructureSetupModule) },
  { path: 'overview', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'latex-introduction', loadChildren: () => import('./modules/latext-introduction/latext-introduction.module').then(m => m.LatextIntroductionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
