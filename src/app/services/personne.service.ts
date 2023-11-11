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
  static addPersonne(value: Partial<{ userName: string | null; nom: string | null; prenom: string | null; email: string | null; password: string | null; }>) {
    throw new Error('Method not implemented.');
  }
  addPersonne(u: Personne): Observable<Personne> {
    return this.http.post<Personne>(this._apiUrl, u);
  }
}
