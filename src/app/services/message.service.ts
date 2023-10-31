import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>();
  constructor() { console.log(this.subject)}
  envoyerMessage(msg: string) {
  this.subject.next(msg); }
  accederMessage() {
  return this.subject;
  }
}
