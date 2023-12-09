import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clips } from '../interfaces/clips';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {
  private _apiUrl: string = 'http://localhost:3000/clips';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Clips[]> {
    return this.http.get<Clips[]>(this._apiUrl);
  }
  addClip(g: Clips): Observable<Clips> {
    return this.http.post<Clips>(this._apiUrl, g);
  }
  deleteClip(g:Clips): Observable<Clips> {
    return this.http.delete<Clips>(this._apiUrl + '/' + g.id);
  }
  updateClip(u: Clips): Observable<Clips> {
    return this.http.put<Clips>(this._apiUrl + '/' + u.id, u);
  }
}

