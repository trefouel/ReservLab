import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { SharedPublicModule } from '../shared-public/shared-public.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    SharedPublicModule
  ]
})
export class AccueilModule { }
