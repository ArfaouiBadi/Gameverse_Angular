import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-service-test',
  templateUrl: './personne-service-test.component.html',
  styleUrls: ['./personne-service-test.component.css']
})
export class PersonneServiceTestComponent implements OnInit{
  personnes : Array <Personne>=new Array <Personne>();
  constructor(private PService:PersonneService){

  }
  ngOnInit(): void {
    this.PService.addPerson({userName:"Arfaoui Badi",email:"Arfaoui@gmail.com",password:"123456789",nom:"badi",prenom:"arfaoui"})
      this.personnes = this.PService.getAll();
      console.log(this.personnes)
  }
  ajouterPersonne(){
    
  }

}
