import { Injectable } from '@angular/core';
import { Streamers } from '../interfaces/streamers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreamersService {

  Streamers: Array<Streamers> = new Array<Streamers>();
  private _apiUrl: string = 'http://localhost:3000/streamers';
  constructor(private http: HttpClient ) {}
  getAll(): Observable<Streamers[]> {
    return this.http.get<Streamers[]>(this._apiUrl);
  }
  
  addStreamer(u: Streamers): Observable<Streamers> {
    return this.http.post<Streamers>(this._apiUrl, u);
  }
  
}
