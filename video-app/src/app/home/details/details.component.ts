import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { YoutubeService } from 'src/app/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
    private route: ActivatedRoute,
    private location: Location,
    private service: YoutubeService    
  ) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.video_id = String(params.get('id'));
        this.service
          .details(this.video_id)
          .subscribe(
            (results) => this.success(results.items[0]),
            err => { this.err(err.error_description) }
          );
      }
    );
  }

  success(result: any) {
    this.details = result;
  }

  err(msg: string){
    console.log(msg);
  }

  back(){
    this.location.back();
  }

}
