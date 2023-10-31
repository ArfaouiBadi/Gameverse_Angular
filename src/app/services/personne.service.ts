import { Injectable } from "@angular/core";
import { Personne } from "../interfaces/personne";
@Injectable({
  providedIn: "root"
})
export class PersonneService {
  personnes: Array <Personne> = new Array <Personne>();
  constructor() { }
  getAll(): Array<Personne> {
  return this.personnes;
}
  addPerson(p: Personne): void {
    this.personnes.push(p);
  }
}
