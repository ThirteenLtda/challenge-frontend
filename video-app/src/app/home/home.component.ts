import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;
  search_results!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private service: YoutubeService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      searchText: ['']
    });
    this.search_results = [];
  }

  submit() {
    const form_value = this.form.value;
    this.service
      .search(form_value.searchText)
      .subscribe(
        (results) => this.success(results),
        err => { this.err(err.error_description); }
      );
  }

  success(results: any) {
    console.log(results.items);
    this.search_results = results.items;
  }

  err(msg: string){
    console.log(msg);
  }

}
