import { Component } from '@angular/core';
import { Validators, FormBuilder, EmailValidator } from "@angular/forms";
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/interfaces/personne';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  personnes: Array <Personne> = new Array<Personne>();
  personneForm = this.fb.group({
    id: ["", Validators.required],
    userName: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    gamesDownloaded: [[], ],
    friends: [[], ],
    friendsOnline: ["", ],
    liveStreams: [[], ],
    clips: [[], ],
  });
  constructor(private fb: FormBuilder, private personneService: PersonneService,private router:Router) { }

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
    this.router.navigate(['/login']);
    this.personneForm.reset();
  }

  afficherTout(): void {
    console.log(this.personnes);
  }
}



