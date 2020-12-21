import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnChanges {

  @Input() videos!: any[];

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit(): void {
    this.videos = [];
  }

  selected(video_id: string){
    this.router.navigate([`/${video_id}/details`]);
  }

}
