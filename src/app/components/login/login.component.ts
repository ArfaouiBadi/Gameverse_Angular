import { Component } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  personnes: Array<Personne> = []; personne: Personne = { };
constructor() { }
  ngOnInit(): void { }
  ajouterPersonne(): void { 
    this.personnes.push({ ...this.personne });
    this.personne.userName = "";
    this.personne.password = "";
    this.personne.nom = ""; 
    this.personne.prenom = "";
    console.log(this.personnes);
  
}
}
