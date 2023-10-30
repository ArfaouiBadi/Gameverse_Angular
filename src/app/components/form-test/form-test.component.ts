import { Component,OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  ngOnInit(): void {
      
  }

  // ...

  constructor(private fb: FormBuilder) { }
  
  }
  
  /*
  personnes: Array<Personne> = []; 
  personne: Personne = {};


  ajouterPersonne(): void { 
      this.personnes.push({ ...this.personne 
    });
  this.personne.nom = ""; 
  this.personne.prenom = "";
  console.log(this.personnes);*/

