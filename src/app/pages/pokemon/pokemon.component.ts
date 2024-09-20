import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  pokemonTypes = ['Fire', 'Water', 'Grass', 'Electric', 'Kombat'];
  pokemonWeakness = ['Fire', 'Water', 'Grass', 'Electric', 'Kombat'];
  pokemonAttackTypes = ['Fire', 'Water', 'Grass', 'Electric', 'Kombat'];

  formGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    pokedexNumber : new FormControl('', [Validators.required, Validators.min(1), Validators.max(151)]),
    hp : new FormControl('', [Validators.required, Validators.min(1), Validators.max(200)]),
    type: new FormControl('', [Validators.required]),
    pokemonImg: new FormControl('', [Validators.required]),
    attackName : new FormControl('', [Validators.required]),
    attackStrength : new FormControl('', [Validators.required, Validators.min(10), Validators.max(100)]),
    attackDescription : new FormControl('', [Validators.required]),
    attackType: new FormControl('', [Validators.required]),
    weakness: new FormControl('', [Validators.required]),

  });

  pokemonId = signal<number | undefined>(undefined);
  routeSubscription: Subscription | null = null

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe( params => {
      this.pokemonId.set(params['id'] ? parseInt(params['id']) : undefined);
    });
  }

  ngOnDestroy(): void {
      this.routeSubscription?.unsubscribe();
  }

  submit(event: Event) {
    event.preventDefault();
    console.log(this.formGroup.value);
  }

  /**
   * to change next Pokemon by id after button press
   */
  next() {
    let nextId = this.pokemonId() || 0;
    nextId++;
    this.router.navigate([`/pokemon/${nextId}`]);
  }

  /**
   * to change previous Pokemon by id after button press
   */
  previous() {
    let nextId = this.pokemonId() || 0;
    nextId--;
    this.router.navigate([`/pokemon/${nextId}`]);
  }

  /**
   * to clean input after button press (X)
   */
  cleanInput(control: any) {
    control.setValue("");
  }

  /**
   * to check if input is valid
   */
  isFieldValid(name: string) {
    const formControl = this.formGroup.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }

  /**
   * to upload Pokemon image
   */
  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          pokemonImg: reader.result as string
        });
      };
    }
  }
}
