import { Component } from '@angular/core';
import { Validators, FormBuilder, EmailValidator } from "@angular/forms";
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/interfaces/personne';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  personnes: Array <Personne> = new Array<Personne>();
  personneForm = this.fb.group({
    id : ["", Validators.required],
    userName: ["", Validators.required],
    nom: ["", Validators.required],
    prenom: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });
  constructor(private fb: FormBuilder, private personneService: PersonneService) { }

  ngOnInit(): void {
    this.getPersonneData();
  }
  getPersonneData(): void {
    this.personneService.getAll().subscribe(data => {
      this.personnes = data;
      console.log(this.personnes);
    });
  }
  ajouterPersonne(): void {
    this.personneService.addPersonne(this.personneForm.value as Personne).subscribe(data => {
      this.personnes.push(data);
    });
    console.log(this.personnes);  
    this.personneForm.reset();
  }

  afficherTout(): void {
    console.log(this.personnes);
  }
}



