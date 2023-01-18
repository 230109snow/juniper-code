import { Component, OnDestroy, OnInit } from '@angular/core';
import { apikey } from 'src/api-key';
import { voteDTO } from 'src/models/voteDTO';
import { CatApiService } from '../cat-api.service';


@Component({
  selector: 'app-fetch-cats',
  templateUrl: './fetch-cats.component.html',
  styleUrls: ['./fetch-cats.component.css']
})
export class FetchCatsComponent implements OnInit, OnDestroy{

  // Dependency Injection
  // Instead of the component class itself instantiating the HttpClient class, we ask the framework to "inject" an instance (or a copy) of HttpClient
  // It's a design pattern for loose coupling
  // By setting httpClient private, we only allow this class to have access to it. If I were to set it public, the html page will also have access to that.
  constructor(private catapi : CatApiService) {}

  numCats : number = 0;
  catpics : any[] = [];
  now : number | Date = Date.now();
  validation = {
    required: true,
    min : 1,
    max : 25
  }
  vote(args : voteDTO) : void {
    this.catapi.vote(args).subscribe({
      next: (res)=> {
          // when the request is successful, handle it her
          console.log(res)
        },
        error: (err) => {
          //when the response returns 4/500 codes, handle it here
          console.error(err)
        }
    })
  }
  getCats(form : any) : void {
    if(form.valid) {
      // assembling and sending the get request
      this.catapi.getCats(this.numCats).subscribe((data: any) => {
        // httpClient returns an observable to handle asynchronous request
        this.catpics = data;
      })
    }
  }
  


  // One of lifecycle hooks
  // When this component mounts/renders for the first time, run whatever code is in here
  // Great place to run any setup code you may have for this component
  ngOnInit(): void {
    console.log(apikey);
  }

  // Runs on unmount
  // Great place to do any clean ups
  ngOnDestroy(): void {
      
  }
}
