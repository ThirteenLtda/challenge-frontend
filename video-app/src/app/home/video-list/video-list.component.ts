import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnChanges {

  @Input() videos!: any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.videos);
  }

  ngOnInit(): void {
    this.videos = [];
  }

}
