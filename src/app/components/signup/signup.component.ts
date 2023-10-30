import { Component } from '@angular/core';
import { Validators, FormBuilder, EmailValidator } from "@angular/forms";

interface Personne {
  userName: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  personnes: Personne[] = [];
  personneForm = this.fb.group({
    userName: ["", Validators.required],
    nom: ["", Validators.required],
    prenom: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { }
  ajouterPersonne(): void {
    this.personnes.push({ ...this.personneForm.value } as Personne);
    console.log(this.personnes);
    this.personneForm.reset();
  }
  afficherTout(): void { console.log(this.personnes); }
}



