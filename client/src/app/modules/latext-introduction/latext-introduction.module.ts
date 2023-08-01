import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { LatextIntroductionRoutingModule } from './latext-introduction-routing.module';
import { LatextIntroductionComponent } from './latext-introduction.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LatextIntroductionComponent
  ],
  imports: [
    CommonModule,
    LatextIntroductionRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class LatextIntroductionModule { }
