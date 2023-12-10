import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isConnected: boolean = false;
  personne :Personne[] =[];
  constructor(private personneService:PersonneService) { }
  ngOnInit(): void {
    this.isConnected = localStorage.getItem("isConnected") == "true" ? true : false;
    this.personneService.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data) => {
        this.personne = data;
      },
      (error) => {
        console.error('Error fetching personne:', error);
      }
    );
  }
  
  logout(): void {
    localStorage.setItem("isConnected", "false");
    this.isConnected = false;
  }

}
