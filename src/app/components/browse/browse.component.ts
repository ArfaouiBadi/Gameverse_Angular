import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from 'src/app/interfaces/games';
import { Streams } from 'src/app/interfaces/streams';
import { GamesService } from 'src/app/services/games.service';
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

  constructor(
    private gamesService: GamesService,
    private streamsService: StreamsService,
    private route: ActivatedRoute
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

    
  }
}
