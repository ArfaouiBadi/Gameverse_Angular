import { Component, OnInit } from '@angular/core';
import { MessageService } from "../../services/message.service";
import { Games } from 'src/app/interfaces/games';
import { GamesService } from 'src/app/services/games.service';
@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {
  constructor(private gameService:GamesService) { }
  games: Array<Games> = []; 
  ngOnInit(): void {
    this.gameService.getAll().subscribe((data: Array<Games>) => {
      this.games = data;
      console.log(this.games);
    });
  }
  
  
}

