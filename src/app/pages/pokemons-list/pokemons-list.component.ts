import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from 'src/app/components/playing-card/playing-card.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  standalone: true,
  imports: [
    PlayingCardComponent,
    SearchBarComponent,
    CommonModule
  ],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent {

  pokemonService = inject(PokemonService);

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
