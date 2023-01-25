import { Component } from '@angular/core';

interface Card {
  id: number
  title: string
  detail: string
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cardData : Card[] = [
    {
      id: 1, title: 'card one', detail: 'one detail'
    },
    {
      id: 2, title: 'card two', detail: 'two detail'
    },
    {
      id: 3, title: 'card three', detail: 'three detail'
    },
    {
      id: 4, title: 'card four', detail: 'four detail'
    },
  ]
}
