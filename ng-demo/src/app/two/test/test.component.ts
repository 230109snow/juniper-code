import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'two-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  data : number[] = [1, 2, 3, 4, 5]
  show : boolean = true;

  toggleClick() : void {
    this.show = !this.show;
  }
}
