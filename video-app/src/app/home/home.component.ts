import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;
  searchResults!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private service: YoutubeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const query = this.route.snapshot.queryParamMap.get('search_query');
    this.form = this.formBuilder.group({
      searchText: [query]
    });

    this.search(query);

    this.searchResults = [];
  }

  search(query: string | null){
    if (query && query.trim().length) {
      this.service
        .search(query)
        .subscribe(
          (results) => this.success(results),
          err => { this.err(err.error_description); }
        );

        const queryParams: Params = { search_query: query };
        this.router.navigate(
          [], 
          {
            relativeTo: this.route,
            queryParams: queryParams, 
            queryParamsHandling: 'merge'
          }
        );
    }
  }

  submit() {
    const form_value = this.form.value;
    this.search(form_value.searchText);
  }

  success(results: any) {
    console.log(results.items);
    this.searchResults = results.items;
  }

  err(msg: string){
    console.log(msg);
  }

}
