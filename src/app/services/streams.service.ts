import { Injectable } from '@angular/core';
import { Streams } from '../interfaces/streams';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  Streams: Array<Streams> = new Array<Streams>();
  private _apiUrl: string = 'http://localhost:3000/streams';
  constructor(private http: HttpClient ) {}
  getAll(): Observable<Streams[]> {
    return this.http.get<Streams[]>(this._apiUrl);
  }
  getStream(id: string): Observable<Streams[]> {
    
    return this.http.get<Streams[]>(this._apiUrl + '?id=' + id);
  }
  addStreamer(u: Streams): Observable<Streams> {
    return this.http.post<Streams>(this._apiUrl, u);
  }
}
