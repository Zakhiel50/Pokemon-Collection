import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pathImg: string = "../../../assets/img/";

  pokemons: Pokemon[] = [];
  currentPokedexNumber: number = 1;

  bgCThunder: string = 'bgCThunder';
  bgCFire: string = 'bgCFire';
  bgCGrass: string = 'bgCGrass';
  bgCWater: string = 'bgCWater';

  constructor() {
    this.load()
    }

  private save() {
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons))
    //localStorage.removeItem('pokemons')
  }

  private load() {
    const pokemonData = localStorage.getItem('pokemons')
    if (pokemonData) {
      this.pokemons = JSON.parse(pokemonData).map((pokemonJSON: Pokemon) => Object.assign(new Pokemon, pokemonJSON));
      this.currentPokedexNumber = Math.max(...this.pokemons.map(pokemon => pokemon.pokedexNumber))
    } else {
      this.init();
      this.save()
    }
  }

  private init() {
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
        weaknessIcon: `${this.pathImg}kombat.png`,
        secondAttack: true,
        pathImg: this.pathImg,
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
        weaknessIcon: `${this.pathImg}water.png`,
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
        weaknessIcon: `${this.pathImg}fire.png`,
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
        weaknessIcon: `${this.pathImg}grass.png`,
        secondAttack: false,
        pathImg: this.pathImg
      }
    ];

  }

  getAll() {
    return this.pokemons.map(pokemon => pokemon)
  }

  get(pokedexNumber: number): Pokemon | undefined {
    const pokemon = this.pokemons.find(pokemon => pokemon.pokedexNumber === pokedexNumber);
    return pokemon
  }

  add(pokemon: Pokemon): Pokemon {
    const pokemonAdded = pokemon

    pokemonAdded.pokedexNumber = this.currentPokedexNumber;
    this.pokemons.push(pokemonAdded);
    this.currentPokedexNumber++
    this.save();

    return pokemonAdded;
  }

  update(pokemon: Pokemon): Pokemon {
    const pokemonUpdated = pokemon

    const pokemonPokedexNumber = this.pokemons.findIndex(originalPokemon => originalPokemon.pokedexNumber === pokemon.pokedexNumber)
    if (pokemonPokedexNumber != -1) {
      this.pokemons[pokemonPokedexNumber] = pokemonUpdated
      this.save();
    }

    return pokemonUpdated;
  }

  delete(pokedexNumber: number) {
    const pokemonPokedexNumber = this.pokemons.findIndex(originalPokemon => originalPokemon.pokedexNumber === pokedexNumber)
    if (pokemonPokedexNumber != -1) {
      this.pokemons.splice(pokemonPokedexNumber, 1)
      this.save();
    }
  }

}
