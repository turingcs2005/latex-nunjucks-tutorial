import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class OverviewModule { }
