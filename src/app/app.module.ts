import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './pages/pokemons-list/pokemons-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppComponent,
    PokemonsListComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
