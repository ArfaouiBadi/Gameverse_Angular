import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from 'src/app/interfaces/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  game :Games[] =[];
  constructor(private route: ActivatedRoute,private gameService:GamesService) { }
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      const gameName = params['name'];
      
      this.gameService.getGame(gameName).subscribe((data) => {
        this.game = data;
        
      },
      (error) => {
        console.error('Error fetching personne:', error);
      })

     
    });
    
  }

}
