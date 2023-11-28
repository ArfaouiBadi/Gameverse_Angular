import { Component } from '@angular/core';
import { Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { Games } from 'src/app/interfaces/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  games: Array <Games> = new Array<Games>();

  gameForm = this.fb.group({
    id : ["", Validators.required],
    name: ["", Validators.required],
    description: ["", Validators.required],
    rating: ["", Validators.required],
    genre: ["", Validators.required],
    online: ["", Validators.required]
  });
  constructor(private fb: FormBuilder, private gameService: GamesService) { 
    
  }

  ngOnInit(): void {
    this.getPersonneData();
  }

  getPersonneData(): void {
    this.gameService.getAll().subscribe(data => {
      this.games = data;
      console.log(this.games);
    });
  }
  addGame(): void {
    this.gameService.addGame(this.gameForm.value as Games).subscribe((data: Games) => {
      this.games.push(data);
    });
    console.log(this.games);  
    this.gameForm.reset();
  }

  afficherTout(): void {
    console.log(this.games);
  }
}
