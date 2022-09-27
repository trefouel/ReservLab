import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AccueilModule } from './accueil/accueil.module';
import { AideModule } from './aide/aide.module';
import { ConnexionModule } from './connexion/connexion.module';
import { ForumModule } from './forum/forum.module';
import { SharedPublicModule } from './shared-public/shared-public.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AccueilModule,
    AideModule,
    ConnexionModule,
    ForumModule,
    SharedPublicModule
  ]
})
export class PublicModule { }
