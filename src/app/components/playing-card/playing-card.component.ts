import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})
export class PlayingCardComponent {
pathImg: string = "../../../assets/img/"
pokemon = input<Pokemon>(new Pokemon());
}
