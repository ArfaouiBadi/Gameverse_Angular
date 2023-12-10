import { Component, OnInit } from '@angular/core';
import { Streamers } from 'src/app/interfaces/streamers';
import { Streams } from 'src/app/interfaces/streams';
import { PersonneService } from 'src/app/services/personne.service';
import { StreamersService } from 'src/app/services/streamers.service';
import { StreamsService } from 'src/app/services/streams.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  streamers: Streamers[] = [];
  following = [];
  streams:Streams[]=[];
  constructor(private sS: StreamersService, private pS: PersonneService,private streamsService:StreamsService) {}

  ngOnInit(): void {
    this.pS.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data: any) => {
        this.following = data.map((personne: any) => personne.followed);
        this.following=this.following[0];
      },
      (error) => {
        console.log(error);
      }
    );
    this.sS.getAll().subscribe((data)=>{
      this.streamers = data;
    })

    this.streamsService.getAll().subscribe((data)=>{
      this.streams=data;
    })
  }

  
}
