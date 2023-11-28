import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { Games } from 'src/app/interfaces/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-modifier-game',
  templateUrl: './modifier-game.component.html',
  styleUrls: ['./modifier-game.component.css']
})
export class ModifierGameComponent implements OnInit{
  games: Array<Games> = new Array<Games>();

  gameFormm = this.fb.group({
    id : ["", Validators.required],
    name: ["", Validators.required],
    description: ["", Validators.required],
    rating: ["", Validators.required],
    genre: ["", Validators.required],
    online: ["", Validators.required]
  });
  constructor(private gameService:GamesService,private http:HttpClient,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.getGamesData();
  }
  
  getGamesData(): void {
    this.gameService.getAll().subscribe(data => {
      this.games = data;
      console.log(this.games);
    });
  }
  
  updateGame():void{
    this.gameService.updateGame(this.gameFormm.value as Games  ).subscribe(data => {    
      console.log(data);
    })
  }
}


