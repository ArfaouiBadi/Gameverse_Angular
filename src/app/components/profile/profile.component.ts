import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  personne :Personne[] =[];
  constructor(private personneService:PersonneService) { }
  
  ngOnInit(): void {
    this.personneService.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data) => {
        this.personne = data;
      },
      (error) => {
        console.error('Error fetching personne:', error);
      }
    );
    console.log(this.personne);
  }
  

  
  
}
