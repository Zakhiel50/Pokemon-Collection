import { Component, model } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Pokemon } from './models/pokemon.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayingCardComponent,
    SearchBarComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'PokemonCollectionCards';
  search = model<string>('');
  actualSearch = model<string>(this.search());
  history = model <string[]>([]);

  pathImg: string = "../../../assets/img/";
  pokemons: Pokemon[] = [];
  pokemon1!: Pokemon;
  pokemon2!: Pokemon;
  bgCThunder: string = 'bgCThunder';
  bgCFire: string = 'bgCFire';
  bgCGrass: string = 'bgCGrass';
  bgCWater: string = 'bgCWater';
  pokemonName: string = '';

  pokemonResult: Pokemon[] = [];
  searchCompleted: boolean = false;

  
  selectedPokemonByPokedexNumber : number = 0;
  searchResult: string = '';

  /**
   * Update search term and launch search.
   * @param term - This is term used in searchBar. type: string
   * @returns - nothing return.
   */
  searchInput(term: string) {
    this.searchResult = term;
    this.returnPokemonResult(this.search());
    this.searchCompleted = true;
  }

  /**
   * Clean search term.
   * @returns - nothing return.
   */
  deleteTerm() {
    this.searchResult = '';
    this.actualSearch.set(' ')
    this.search.set('')
    this.searchCompleted = false
  }
  
  /**
   * Search term (pokémon) and update pokemonResult - type: string.
   * @param term - This is term used in searchBar. type: string
   * @returns - pokemonResult.
   */
  returnPokemonResult(term: string) {
    return this.pokemonResult = this.pokemons
    .filter((pokemon: Pokemon) => pokemon.name.toLowerCase()
    .includes(term.toLowerCase()));
  }


  constructor() {
    if (this.search() === '') {
      this.searchCompleted = false;
    }
    
    //Pokemons List
    this.pokemons = [
      {
        pokedexNumber: 25,
        index: 25,
        iconType: `${this.pathImg}electrik.png`,
        backgroundColor: this.bgCThunder,
        pokemonImg: `${this.pathImg}pikachu.png`,
        iconFirstAttack_type1: `${this.pathImg}electrik.png`,
        iconFirstAttack_type2: ``,
        iconSecondAttack_type1: `${this.pathImg}electrik.png`,
        iconSecondAttack_type2: `${this.pathImg}electrik.png`,
        name: "Pikachu",
        hp: 60,
        figureCaption: `N°025 Pikachu`,
        firstAttack_name: "Geo Impact",
        firstAttack_strength: 60,
        firstAttack_description: "Attack with a electrik attack and great damages inflicted.",
        secondAttack_name: "Electro Ball",
        secondAttack_strength: 30,
        secondAttack_description: "Attack with a electrik ball.",
        weaknessIcon: 'kombat.png',
        secondAttack: true,
        pathImg: this.pathImg
      },
      {
        pokedexNumber: 2,
        index: 2,
        iconType: `${this.pathImg}fire.png`,
        backgroundColor: this.bgCFire,
        pokemonImg: `${this.pathImg}charmander.png`,
        iconFirstAttack_type1: `${this.pathImg}fire.png`,
        iconFirstAttack_type2: '',
        iconSecondAttack_type1: '',
        iconSecondAttack_type2: '',
        name: "Charmander",
        hp: 60,
        figureCaption: `N°002 Charmander`,
        firstAttack_name: "Ember",
        firstAttack_strength: 60,
        firstAttack_description: "Attack with a fire attack and great damages inflicted.",
        secondAttack_name: "",
        secondAttack_strength: 0,
        secondAttack_description: "",
        weaknessIcon: "water.png",
        secondAttack: false,
        pathImg: this.pathImg
      },
      {
        pokedexNumber: 1,
        index: 1,
        iconType: `${this.pathImg}grass.png`,
        backgroundColor: this.bgCGrass,
        pokemonImg: `${this.pathImg}bulbasaur.png`,
        iconFirstAttack_type1: `${this.pathImg}grass.png`,
        iconFirstAttack_type2: `${this.pathImg}grass.png`,
        iconSecondAttack_type1: '',
        iconSecondAttack_type2: '',
        name: "Bulbasaur",
        hp: 70,
        figureCaption: `N°001 Bulbasaur`,
        firstAttack_name: "Razor Leaf",
        firstAttack_strength: 50,
        firstAttack_description: "Attack with a grass attack.",
        secondAttack_name: "",
        secondAttack_strength: 0,
        secondAttack_description: "",
        weaknessIcon: "fire.png",
        secondAttack: false,
        pathImg: this.pathImg
      },
      {
        pokedexNumber: 3,
        index: 3,
        iconType: `${this.pathImg}water.png`,
        backgroundColor: this.bgCWater,
        pokemonImg: `${this.pathImg}squirtle.png`,
        iconFirstAttack_type1: `${this.pathImg}water.png`,
        iconFirstAttack_type2: `${this.pathImg}water.png`,
        iconSecondAttack_type1: '',
        iconSecondAttack_type2: '',
        name: "Squirtle",
        hp: 70,
        figureCaption: `N°003 Squirtle`,
        firstAttack_name: "Bubble",
        firstAttack_strength: 50,
        firstAttack_description: "Attack with a big bubble.",
        secondAttack_name: "",
        secondAttack_strength: 0,
        secondAttack_description: "",
        weaknessIcon: "grass.png",
        secondAttack: false,
        pathImg: this.pathImg
      }
    ];
  }
}
