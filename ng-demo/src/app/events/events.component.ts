import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatApiService } from '../cat-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  constructor(private currentRoute: ActivatedRoute, private service: CatApiService) {}

  ngOnInit(): void {
    this.service.foo = 'we visited events'
    console.log(this.service.foo);
    this.currentRoute.params.subscribe((params) => {
      console.log(params)
    })
    this.currentRoute.url.subscribe((url) => {
      console.log(url);
    })
    this.currentRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams)
    })
  }
}
