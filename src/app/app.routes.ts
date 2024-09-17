import { Routes } from "@angular/router";
import { PokemonsListComponent } from "./pages/pokemons-list/pokemons-list.component";
import { PokemonComponent } from "./pages/pokemon/pokemon.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

export const routes: Routes = [ 
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
    }, {
    path: 'home',
    component: PokemonsListComponent
}, {
    path: 'pokemon',
    component: PokemonComponent
}, {
    path: '**',
    component: NotFoundComponent
}];