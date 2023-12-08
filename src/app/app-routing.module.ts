import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';

import { FormTestComponent } from './components/form-test/form-test.component';
import { homeGuardGuard } from './guard/home-guard.guard';
import { AddGameComponent } from './components/add-game/add-game.component';
import { ModifierGameComponent } from './components/modifier-game/modifier-game.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowseComponent } from './components/browse/browse.component';
import { DetailsComponent } from './components/details/details.component';
import { StreamsComponent } from './components/streams/streams.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'streams', component: StreamsComponent },
  
  { path: 'Acceuil', component: AccueilComponentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'form', component: FormTestComponent },
  {
    path: 'home',
    component: AccueilComponentComponent,
    canActivate: [homeGuardGuard],
  },
  { path: 'addGame', component: AddGameComponent },
  { path: 'modifierGame', component: ModifierGameComponent },
  { path: '**', component: AccueilComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
