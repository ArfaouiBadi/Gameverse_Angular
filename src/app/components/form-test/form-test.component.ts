import { Component,OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {

   }

  name = new FormControl('');
  updateName() {
    this.name.setValue("Tounsi"); }
    
 
  
  /*
  personnes: Array<Personne> = []; 
  personne: Personne = {};


  ajouterPersonne(): void { 
      this.personnes.push({ ...this.personne 
    });
  this.personne.nom = ""; 
  this.personne.prenom = "";
  console.log(this.personnes);*/
}


