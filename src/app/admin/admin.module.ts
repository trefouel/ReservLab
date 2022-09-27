import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { SharedAdminModule } from './shared-admin/shared-admin.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SettingsModule,
    ProfileModule,
    DashboardModule,
    AnalyticsModule,
    SharedAdminModule
  ]
})
export class AdminModule { }
