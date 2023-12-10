import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  streamed: Streams[] = [];
  constructor(private sS: StreamersService, private pS: PersonneService,private streamsService:StreamsService,private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.pS.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data: any) => {
        
        this.following = data[0].Followed;
        
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

    this.route.queryParams.subscribe((params) => {
      const streamID = params['id'];
      console.log(streamID);
      if (streamID) {
        this.streamsService.getStream(streamID).subscribe(
          (data) => {
            this.streamed = data;
            console.log(this.streamed);
          },
          (error) => {
            console.error(`Error fetching stream with ID ${streamID}: ${error}`);
          }
        );
      }
    });
  }


  handleaddFollow(streamer: Streamers) {
    
    const following: Streamers[] = this.following;
    
    following.push(streamer);
    this.pS.getPersonne(localStorage.getItem("userConnected")!).subscribe(
      (data: any) => {
        data[0].Followed = following;
        this.pS.updatePersonne(data[0]).subscribe();
      },
      (error) => {
        console.log(error);
      }
    );


  }


  
}
