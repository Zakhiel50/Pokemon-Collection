import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayingCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokemonCollectionCards';
}
