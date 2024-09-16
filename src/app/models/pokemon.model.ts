export class Pokemon {

    index: number = 0 ;
    pokedexNumber: number = 0;
    pathImg: string = "../../../assets/img/"
    iconType: string= "electrik.png"
    pokemonImg: string= "pikachu.png"
    backgroundColor: string = 'rgba(255, 252, 81, 0.676)';
    iconFirstAttack_type1: string = "electrik.png"
    iconFirstAttack_type2?: string;
    iconSecondAttack_type1?: string = "electrik.png"
    iconSecondAttack_type2?: string = "electrik.png"
    name: string = "Pikachu";
    hp: number = 40;
    figureCaption: string = `N°001 ${this.name}`;
    firstAttack_name: string = "Geo Impact";
    secondAttack_name?: string = "Electro Ball";
    firstAttack_strength: number = 60;
    secondAttack_strength?: number = 30;
    firstAttack_description: string = "Attack with a electrik attack and great damages inflicted."
    secondAttack_description?: string = "";
    weaknessIcon: string = 'kombat.png'
    secondAttack: boolean = false;
    
}