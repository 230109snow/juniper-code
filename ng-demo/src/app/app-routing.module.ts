import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchCatsComponent } from './fetch-cats/fetch-cats.component';
import { TestComponent } from './two/test/test.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: 'cats',
    component: FetchCatsComponent
  },
  {
    path: 'events/:mode',
    component: EventsComponent
  },
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
