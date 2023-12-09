import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../interfaces/personne';
@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  
  personnes: Array<Personne> = new Array<Personne>();
  private _apiUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient ) {}
  getAll(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this._apiUrl);
  }
  getPersonne(email:string): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this._apiUrl}?email=${email}`);
  }
  
  addPersonne(u: Personne): Observable<Personne> {
    return this.http.post<Personne>(this._apiUrl, u);
  }
  Register(u: Personne): boolean {
    
    this.getAll().subscribe(data => {this.personnes=data});
    
    for (let personne of this.personnes) {
        if (personne.email == u.email && personne.password == u.password) {
          return true;
        }
    }
    return false;
  }
  
}
