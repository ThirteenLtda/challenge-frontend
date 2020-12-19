import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoListComponent } from './video-list/video-list.component';
import { DetailsComponent, SafePipe } from './details/details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [HomeComponent, VideoListComponent, DetailsComponent, SafePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutes,
    FontAwesomeModule
  ],
})
export class HomeModule { }
