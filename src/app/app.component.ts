import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Pokemon } from './models/pokemon.model';

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

  pokemon1!: Pokemon
  pokemon2!: Pokemon
  bgCThunder = 'bgCThunder';
  bgCFire = 'bgCFire';


  constructor() {
    this.pokemon1 = new Pokemon();
    this.pokemon1.iconType = `${this.pokemon1.pathImg}electrik.png`;
    this.pokemon1.backgroundColor = this.bgCThunder
    this.pokemon1.pokemonImg = `${this.pokemon1.pathImg}pikachu.png`;
    this.pokemon1.iconFirstAttack_type1 = `${this.pokemon1.pathImg}electrik.png`;
    this.pokemon1.iconFirstAttack_type2 = ``;
    this.pokemon1.iconSecondAttack_type1 = `${this.pokemon1.pathImg}electrik.png`;
    this.pokemon1.iconSecondAttack_type2 = `${this.pokemon1.pathImg}electrik.png`;
    this.pokemon1.name = "Pikachu";
    this.pokemon1.hp = 60;
    this.pokemon1.figureCaption = `N°0025 ${this.pokemon1.name}`;
    this.pokemon1.firstAttack_name = "Geo Impact";
    this.pokemon1.firstAttack_strength = 60;
    this.pokemon1.firstAttack_description = "Attack with a electrik attack and great damages inflicted.";
    this.pokemon1.secondAttack_name = "Electro Ball";
    this.pokemon1.secondAttack_strength = 30;
    this.pokemon1.secondAttack_description = "Attack with a electrik ball.";
    this.pokemon1.weaknessIcon = 'kombat.png'
    this.pokemon1.secondAttack = true


    this.pokemon2 = new Pokemon();
    this.pokemon2.iconType = `${this.pokemon1.pathImg}fire.png`;
    this.pokemon2.backgroundColor = this.bgCFire
    this.pokemon2.pokemonImg = `${this.pokemon1.pathImg}charmander.png`;
    this.pokemon2.iconFirstAttack_type1 = `${this.pokemon1.pathImg}fire.png`;
    this.pokemon2.iconFirstAttack_type2
    this.pokemon2.iconSecondAttack_type1
    this.pokemon2.iconSecondAttack_type2
    this.pokemon2.name = "Charmander";
    this.pokemon2.hp = 60;
    this.pokemon2.figureCaption = `N°002 ${this.pokemon2.name}`;
    this.pokemon2.firstAttack_name = "Ember";
    this.pokemon2.firstAttack_strength = 60;
    this.pokemon2.firstAttack_description = "Attack with a electrik attack and great damages inflicted.";
    this.pokemon2.weaknessIcon = "water.png";
    this.pokemon2.secondAttack = false
  }
  

}
