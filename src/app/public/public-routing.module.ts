import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './accueil/page/page.component';
import { AuthComponent } from './connexion/auth/auth.component';

const routes: Routes = [
  {path: 'home', component: PageComponent},
  {path: 'connexion', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

