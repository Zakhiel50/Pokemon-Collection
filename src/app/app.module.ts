import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; // Importer le composant autonome
import { PlayingCardComponent } from './components/playing-card/playing-card.component'; // Composant autonome

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
