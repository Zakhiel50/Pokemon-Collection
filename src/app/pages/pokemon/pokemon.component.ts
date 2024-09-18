import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

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

  next() {
    let nextId = this.pokemonId() || 0;
    nextId++;
    
    this.router.navigate([`/pokemon/${nextId}`])
  }
}
