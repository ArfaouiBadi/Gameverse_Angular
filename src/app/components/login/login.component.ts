import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  personnes: Array<Personne> = []; 
  
  personneForm = this.fb.group({
    userName: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });
  constructor( private router:Router,private personneService:PersonneService,private fb:FormBuilder) { }
    ngOnInit(): void {
    }
    erreur: boolean = false;
  login(): void {
    if(this.personneService.Register(this.personneForm.value as Personne)){
      this.erreur = false;
     
      localStorage.setItem("isConnected", "true");
      localStorage.setItem("userConnected", this.personneForm.value.email as string);

      this.router.navigate(['/home']);
    }
    else{
      this.erreur = true;
      setTimeout(() => {
        this.erreur = false;
      }, 3000);
      
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