import { Component,OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  msg: string ="";
  constructor(private messageService: MessageService) { }
  ngOnInit() { }
  ajouterMessage() {
  this.messageService.envoyerMessage(this.msg);
  this.msg = "";
  }
}
