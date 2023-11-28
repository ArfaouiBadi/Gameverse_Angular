import { Injectable } from '@angular/core';
import { Games } from '../interfaces/games';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: Array<Games> = new Array<Games>();
  private _apiUrl: string = 'http://localhost:3000/games';
  constructor(private http: HttpClient ) {}
  getAll(): Observable<Games[]> {
    return this.http.get<Games[]>(this._apiUrl);
  }
  
  addGame(g: Games): Observable<Games> {
    return this.http.post<Games>(this._apiUrl, g);
  }
  deleteGame(g:Games): Observable<Games> {
    return this.http.delete<Games>(this._apiUrl + '/' + g.id);
  }
  updateGame(u: Games): Observable<Games> {
    return this.http.put<Games>(this._apiUrl + '/' + u.id, u);
  }
}
