import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatexIntroductionRoutingModule } from './latex-introduction-routing.module';
import { LatexIntroductionComponent } from './latex-introduction.component';
import { SharedModule } from '../shared/shared.module';

import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    LatexIntroductionComponent
  ],
  imports: [
    CommonModule,
    LatexIntroductionRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class LatexIntroductionModule { }
