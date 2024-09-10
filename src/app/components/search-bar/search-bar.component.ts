import { Component, Output, EventEmitter, Input } from '@angular/core';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
pathImg: string = "../../../assets/img/"

@Input() search = ""

@Output() searchChange = new EventEmitter<string>()

@Output('submit') searchButtonPokemon = new EventEmitter();

searchPokemon() {
  this.searchButtonPokemon.emit();  
  this.cleanSearch();
}

updateSearch(value: string,) {
  this.searchChange.emit(value)
}
cleanSearch() {
  this.search = "";
}
}
