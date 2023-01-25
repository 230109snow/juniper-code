import { Component, Input } from '@angular/core';

interface Card {
  id: number
  title: string
  detail: string
}

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  @Input() data! : Card;
}
