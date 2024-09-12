import { NgFor, NgIf } from '@angular/common';
import { Component, Output, EventEmitter, Input, input, model } from '@angular/core';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
pathImg: string = "../../../assets/img/"

search = model<string>('')
actualSearch = model<string>(''); 
history = model<string[]>([]);

@Output() searchPokemonResult = new EventEmitter<string>();
searchResult() {
  this.searchPokemonResult.emit(this.search())
}

searchButtonPokemon = new EventEmitter();

searchPokemon() {
  this.addHistory()

  this.searchButtonPokemon.emit(this.search());
  this.actualSearch.set(this.search())
  this.search.set('')
}

updateSearch(value: string) {
  this.search.set(value)
  this.actualSearch.set(this.search())
}
addHistory () {
  this.history().push(`${this.search()},`)
}
// 1:16:01  problemes: logique d'historique perdu + search.set se réinitialise à la place de search  (depuis avoir utilise "model")
}
