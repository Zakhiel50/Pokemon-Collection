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
  @Output() deleteSearchTerm = new EventEmitter<string>();
  @Output() searchButtonPokemon = new EventEmitter();

   /**
   * Emit - Clean search term.
   * @returns - nothing return.
   */
  cleanSearchTerm() {
    this.deleteSearchTerm.emit(this.search())
    this.actualSearch.set('')
  }

   /**
   * Emit - Update search term and launch search.
   * @returns - nothing return.
   */
  searchResult() {
    this.searchPokemonResult.emit(this.search())
  }


 /**
   * Update search term and launch search.
   * @param value value: string
   * @returns - nothing return.
   */
  updateSearch(value: string) {
    this.search.set(value)
    this.actualSearch.set(this.search())
  }

   /**
   * Add search to history and add ','.
   * @returns - nothing return.
   */
  addHistory () {
    this.history().push(`${this.search()},`)
  }
}
