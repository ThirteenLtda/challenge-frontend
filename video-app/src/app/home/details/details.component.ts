import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  video_id!: string;
  details!: any;
  safeURL!: SafeResourceUrl;

  constructor(
    private _sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private service: YoutubeService    
  ) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => this.video_id = String(params.get('id')));
    console.log(this.video_id);
    this.service
      .details(this.video_id)
      .subscribe(
        (results) => this.success(results.items[0]),
        err => { this.err(err.error_description) }
      );
  }

  success(result: any) {
    console.log(result);
    this.details = result;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/watch?v=${this.details.id.video_id}`);
  }

  err(msg: string){
    console.log(msg);
  }

}
