import { Component,OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  ngOnInit(): void {
      
  }
  personneForm = new FormGroup({
  id: new FormControl(""),
  nom: new FormControl(""),
  prenom: new FormControl("")
  });

  afficherTout(): void {
  console.log(this.personneForm.value);
  }
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

