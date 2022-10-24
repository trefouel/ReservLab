import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './public/connexion/auth/auth.component';

const route: Routes = [
  {
    path: 'connexion',
    component: AuthComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', redirectTo: '/connexion', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
