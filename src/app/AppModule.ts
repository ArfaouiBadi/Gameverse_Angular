import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { FormTestComponent } from './components/form-test/form-test.component';

import { ReactiveFormsModule } from '@angular/forms';

import { PersonneServiceTestComponent } from './components/personne-service-test/personne-service-test.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MostPlayedGamesComponent } from './components/most-played-games/most-played-games.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { ModifierGameComponent } from './components/modifier-game/modifier-game.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/details/details.component';
import { BrowseComponent } from './components/browse/browse.component';
import { StreamsComponent } from './components/streams/streams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainContainerComponent,
    ProfileComponent,
    DetailsComponent,
    BrowseComponent,
    LoginComponent,
    SignupComponent,
    StoreComponent,
    DashboardComponent,
    StreamsComponent,
    AccueilComponentComponent,
    FormTestComponent,

    PersonneServiceTestComponent,

    MostPlayedGamesComponent,
    AllGamesComponent,
    AddGameComponent,
    ModifierGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
