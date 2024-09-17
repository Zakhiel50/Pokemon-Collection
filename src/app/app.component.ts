import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule} from '@angular/common';
import { PokemonsListComponent } from "./pages/pokemons-list/pokemons-list.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayingCardComponent,
    SearchBarComponent,
    CommonModule,
    PokemonsListComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PokemonCollectionCards';
}
