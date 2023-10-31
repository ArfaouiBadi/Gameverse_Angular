import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { CalculetteComponent } from './components/calculette/CalculetteComponent';
import { FormTestComponent } from './components/form-test/form-test.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'User',component:UsersComponentComponent},
  {path:'Acceuil',component:MainContainerComponent},
  {path:'calculette',component:CalculetteComponent},
  {path:'form',component:FormTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
