import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
import { MessageService } from "src/app/services/message.service";
@Component({
selector: "app-second"
,
templateUrl: "./second.component.html"
,
styleUrls: ["./second.component.css"]
})

export class SecondComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  subscription: Subscription | undefined;
  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.subscription = this.messageService.accederMessage().subscribe(
      msg => this.messages.push(msg)
    );
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}