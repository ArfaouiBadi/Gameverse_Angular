import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  personnes: Array<Personne> = []; personne: Personne = { };
constructor( private router:Router,private personneService:PersonneService) { }
  ngOnInit(): void {
    
  }  
  login(): void {
    if(this.personneService.checkExistPersonne(this.personne)){
      console.log("user found");
      localStorage.setItem("isConnected", "true");
      this.router.navigate(['/home']);
    }
    else{
      console.log("user not found");
    }
  }
  }
/*
ajouterPersonne(): void { 
    this.personnes.push({ ...this.personne });
    this.personne.userName = "";
    this.personne.password = "";
    this.personne.nom = ""; 
    this.personne.prenom = "";
    console.log(this.personnes);
  
}
*/