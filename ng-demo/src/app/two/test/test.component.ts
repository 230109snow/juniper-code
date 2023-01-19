import { Component, OnInit } from '@angular/core';
import { CatApiService } from 'src/app/cat-api.service';

// Decorator
@Component({
  selector: 'two-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  constructor(private service : CatApiService) {}

  ngOnInit(): void {
    // this.service.foo = 'we came back to test component'
      this.service.foo = 'test module'
      console.log(this.service.foo);
  }

  data : number[] = [1, 2, 3, 4, 5]
  show : boolean = true;

  toggleClick() : void {
    this.show = !this.show;
  }
}
