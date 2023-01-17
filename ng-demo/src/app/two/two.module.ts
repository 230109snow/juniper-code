import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    FooComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooComponent,
    TestComponent
  ]
})
export class TwoModule { }
