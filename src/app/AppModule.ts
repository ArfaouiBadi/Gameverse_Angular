import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { CalculetteComponent } from './components/calculette/CalculetteComponent';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainContainerComponent,
    CarouselComponent,
    CardsComponent,
    LoginComponent,
    SignupComponent,
    StoreComponent,
    DashboardComponent,
    MyCartComponent,
    UsersComponentComponent,
    AccueilComponentComponent,
    FormTestComponent,
    CalculetteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
