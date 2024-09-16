import { Component, computed, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Pokemon } from './models/pokemon.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule} from '@angular/common';
import { PokemonService } from './services/pokemon/pokemon.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayingCardComponent,
    SearchBarComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  pokemonService = inject(PokemonService);

  title = 'PokemonCollectionCards';
  search = model<string>('');
  actualSearch = model<string>(this.search());
  history = model <string[]>([]);

  pokemons= signal<Pokemon[]>([]);

  pokemonResult: Pokemon[] = [];
  searchCompleted = signal<boolean>(false);

  searchResult = () => {
    this.searchCompleted.set(true);

    return this.pokemonResult = this.pokemons()
    .filter((pokemon: Pokemon) => pokemon.name.toLowerCase()
    .includes(this.search().toLowerCase()));
  };



  /**
   * Clean search term.
   * @returns - nothing return.
   */
  deleteTerm() {
  //  this.searchResult = '';
    this.actualSearch.set(' ')
    this.search.set('')
    this.searchCompleted.set(false);
  }
  
  /**
   * Search term (pokémon) and update pokemonResult - type: string.
   * @param term - This is term used in searchBar. type: string
   * @returns - pokemonResult.
   */
  returnPokemonResult(term: string) {
    console.log(this.pokemonResult);
    console.log(this.searchCompleted);
    
    
    return this.pokemonResult = this.pokemons()
    .filter((pokemon: Pokemon) => pokemon.name.toLowerCase()
    .includes(term.toLowerCase()));
  }


  constructor() {
    if (this.search() === '') {
      this.searchCompleted.set(false);
    }

    this.pokemons.set(this.pokemonService.getAll());
    
  }

  addPokemon() {
    const generatePokemon = new Pokemon();
    this.pokemonService.add(generatePokemon);
    this.pokemons.set(this.pokemonService.getAll());
  }
}
