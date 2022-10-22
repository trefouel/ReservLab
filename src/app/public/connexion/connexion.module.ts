import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedPublicModule } from '../shared-public/shared-public.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, ReactiveFormsModule, SharedPublicModule],
})
export class ConnexionModule {}
