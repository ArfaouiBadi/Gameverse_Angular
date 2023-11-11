import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-service-test',
  templateUrl: './personne-service-test.component.html',
  styleUrls: ['./personne-service-test.component.css']
})
export class PersonneServiceTestComponent  implements OnInit {
  personnes: Array <Personne> = new Array <Personne>();
  constructor(private personneService: PersonneService) { }
  ngOnInit(): void {
  this.getPersonneData();
  }
  getPersonneData(): void {
  this.personneService.getAll().subscribe(data => {this.personnes=data});
  }
  }

