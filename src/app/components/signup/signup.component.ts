import { Component } from '@angular/core';
import { Validators, FormBuilder, EmailValidator } from "@angular/forms";
import { PersonneService } from 'src/app/services/personne.service';
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

  constructor(private fb: FormBuilder,private personneService:PersonneService) { }
  ngOnInit(): void {
    this.getPersonneData();
  }
  getPersonneData(): void {
    this.personneService.getAll();
    console.log(this.personnes);
    }
  ajouterPersonne(): void {
    this.personnes.push({ ...this.personneForm.value } as Personne)
    PersonneService.addPersonne({ ...this.personneForm.value } as Personne);
    console.log(this.personnes);
    this.personneForm.reset();
  }
  afficherTout(): void { console.log(this.personnes); }
}



