import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/interfaces/games';
import { Router as router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit{
  games: Array<Games> = new Array<Games>();
  router: any;
  constructor(private gameService:GamesService,private http:HttpClient) { }
  ngOnInit(): void {
    this.getGamesData();
  }
  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/votes'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  getGamesData(): void {
    this.gameService.getAll().subscribe(data => {
      this.games = data;
      console.log(this.games);
    });
  }
  handelDelete(g:Games):void{
    this.gameService.deleteGame(g).subscribe(data => {    
      console.log(data);
    })
  }
  

  
}
