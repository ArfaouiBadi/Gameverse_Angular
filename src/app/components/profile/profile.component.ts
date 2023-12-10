import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Clips } from 'src/app/interfaces/clips';
import { Games } from 'src/app/interfaces/games';
import { Personne } from 'src/app/interfaces/personne';
import { Streamers } from 'src/app/interfaces/streamers';
import { ClipsService } from 'src/app/services/clips.service';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  

  addClipForm: FormGroup;
  personne :Personne[] =[];
  clips :Clips[] =[];
  following:Streamers[]=[];
  constructor(private personneService:PersonneService,private clipsService:ClipsService,private formBuilder: FormBuilder) {
    this.addClipForm = this.formBuilder.group({
      id: [''],
      title: [''],
      description: [''],
      game: [''],
      views: [''],
      likes: [''],
      dislikes: [''],
      video: [''],
      image: [''],
      userName: ['']
    });
   }
  
  ngOnInit(): void {
    this.personneService.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data) => {
        this.personne = data;
        this.clips = this.personne[0].clips!;
        this.following = this.personne[0].Followed!;
        console.log(this.following);
      },
      (error) => {
        console.error('Error fetching personne:', error);
      }
    );
    
    
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
  addClip(): void {
    this.clipsService.addClip(this.addClipForm.value).subscribe(
      (data) => {
        console.log(data);
        
      },
      (error) => {
        console.error('Error adding clip:', error);
      }
    );
    this.personne[0].clips?.push(this.addClipForm.value);
    this.personneService.updatePersonne(this.personne[0]).subscribe();
  }
  deleteClip(clip: Clips) {
    const index = this.clips.indexOf(clip);
    this.clips.splice(index, 1);
    this.clipsService.deleteClip(clip).subscribe();
    const index2 = this.personne[0].clips?.indexOf(clip);
    this.personne[0].clips?.splice(index2!, 1);
    this.personneService.updatePersonne(this.personne[0]).subscribe();
  }
  handeladdGameToDownloaded(game: Games) {
    this.personne[0].downloaded?.push(game);
    this.personneService.updatePersonne(this.personne[0]).subscribe();
  }
  handleRemoveFromDownloads(game: Games) {
    const index = this.personne[0].downloaded?.indexOf(game);
    console.log(index);
    this.personne[0].downloaded?.splice(index!, 1);
    this.personneService.updatePersonne(this.personne[0]).subscribe();
  }
  handleUnfollow(streamer: Streamers) {
    const index = this.following.indexOf(streamer);
    this.following.splice(index, 1);
    this.personne[0].Followed = this.following;
    this.personneService.updatePersonne(this.personne[0]).subscribe();
  }
  
}
