import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedProtectedModule } from './shared-protected/shared-protected.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfilModule } from './profil/profil.module';
import { LogoutModule } from './logout/logout.module';
import { InboxModule } from './inbox/inbox.module';
import { SettingsModule } from './settings/settings.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedProtectedModule,
    DashboardModule,
    ProfilModule,
    LogoutModule,
    InboxModule,
    SettingsModule
  ]
})
export class ProtectedModule { }
