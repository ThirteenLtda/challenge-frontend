import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  search(text: string): Observable<any>{
    console.log(`${environment.youtube_api.url}/search?part=id,snippet&q=${text}&key=${environment.youtube_api.key}`);
    return this.http.get(`${environment.youtube_api.url}/search?part=id,snippet&q=${text}&key=${environment.youtube_api.key}`);
  }
}
