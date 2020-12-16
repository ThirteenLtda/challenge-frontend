import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  video_id!: string;
  details!: any;

  constructor(
    private route: ActivatedRoute,
    private service: YoutubeService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => this.video_id = String(params.get('id')));
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
  }

  err(msg: string){
    console.log(msg);
  }

}
