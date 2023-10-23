import { Component,OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit{
  personnes: Array<Personne> = []; 
  personne: Personne = {};
  constructor() { }
  ngOnInit(): void { }
  ajouterPersonne(): void { 
      this.personnes.push({ ...this.personne 
    });
  this.personne.nom = ""; 
  this.personne.prenom = "";
  console.log(this.personnes);
}

  
}
