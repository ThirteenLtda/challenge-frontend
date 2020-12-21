import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  search(text: string, pageToken?: string): Observable<any>{
    let params = new HttpParams()
      .set("part", "id,snippet")
      .set("type", "video")
      .set("maxResults", "9")
      .set("q", text)
      .set("key", environment.youtube_api.key);
  
    if (pageToken) {
      params.append("pageToken", pageToken!);
    }

    return this.http.get(
      `${environment.youtube_api.url}/search`, 
      { params: params }
    );
  }

  details(video_id: string): Observable<any>{
    let params = new HttpParams()
      .set("id", video_id)
      .set("part", "snippet,statistics")
      .set("key", environment.youtube_api.key);

    return this.http.get(
      `${environment.youtube_api.url}/videos`,
      { params: params }
    );
  }
}
