import { Component, OnInit } from '@angular/core';
import { Clips } from 'src/app/interfaces/clips';
import { Games } from 'src/app/interfaces/games';
import { Personne } from 'src/app/interfaces/personne';
import { ClipsService } from 'src/app/services/clips.service';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  personne :Personne[] =[];
  clips :Clips[] =[];
  constructor(private personneService:PersonneService,private clipsService:ClipsService) { }
  
  ngOnInit(): void {
    this.personneService.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data) => {
        this.personne = data;
      },
      (error) => {
        console.error('Error fetching personne:', error);
      }
    );
    this.clipsService.getClips(localStorage.getItem("userConnected")!).subscribe(
      (data) => {
        this.clips = data;
      },
      (error) => {
        console.error('Error fetching Clips:', error);
      }
    );
    console.log();
  }
  handleLogout(){
    localStorage.setItem("isConnected", "false");
    localStorage.setItem("userConnected", "");
    
  }

  handleRemoveFromLibrary(game: Games) {
    const index = this.personne[0].library?.indexOf(game);
    console.log(index);
    this.personne[0].library?.splice(index!, 1);
    this.personneService.updatePersonne(this.personne[0]).subscribe();
  }
  
  
}
