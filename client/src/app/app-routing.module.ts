import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'overview', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'latex-introduction', loadChildren: () => import('./modules/latex-introduction/latex-introduction.module').then(m => m.LatexIntroductionModule) },
  { path: 'infrastructure', loadChildren: () => import('./modules/infrastructure/infrastructure.module').then(m => m.InfrastructureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
