import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { InfrastructureSetupRoutingModule } from './infrastructure-setup-routing.module';
import { InfrastructureSetupComponent } from './infrastructure-setup.component';
import { SharedModule } from '../modules/shared/shared.module';


@NgModule({
  declarations: [
    InfrastructureSetupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfrastructureSetupRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class InfrastructureSetupModule { }
