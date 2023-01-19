import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { TestComponent } from './test/test.component';
import { CatApiService } from '../cat-api.service';


@NgModule({
  declarations: [
    FooComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CatApiService
  ],
  exports: [
    TestComponent
  ]
})
export class TwoModule { }
