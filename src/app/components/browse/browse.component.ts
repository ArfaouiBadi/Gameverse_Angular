import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from 'src/app/interfaces/games';
import { Personne } from 'src/app/interfaces/personne';
import { Streams } from 'src/app/interfaces/streams';
import { GamesService } from 'src/app/services/games.service';
import { PersonneService } from 'src/app/services/personne.service';
import { StreamsService } from 'src/app/services/streams.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  games: Games[] = [];
  streams: Streams[] = [];
  streamed: Streams[] = []; // Use nullable type for a single streamed item
  filteredGames: Games[] = [];
  personne: Personne[] = [];
  constructor(
    private gamesService: GamesService,
    private streamsService: StreamsService,
    private route: ActivatedRoute,
    private personneService: PersonneService
  ) {}

  ngOnInit(): void {
    this.gamesService.getAll().subscribe((data) => {
      this.games = data;

      // Assuming you want to sort all games by downloads
      this.filteredGames = [...this.games].sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
    });

    this.streamsService.getAll().subscribe((data) => {
      this.streams = data;
    });
    this.personneService.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data) => {
        this.personne = data;
       
      },
      (error) => {
        console.error('Error fetching personne:', error);
      }
    );

    
  }
  handeladdGameToDownloaded(game: Games) {
    this.personne[0].downloaded?.push(game);
    this.personneService.updatePersonne(this.personne[0]).subscribe();
  }
}
