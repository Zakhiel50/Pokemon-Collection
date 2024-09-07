import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Assurez-vous que vous avez des routes définies si nécessaire

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
    // Ajouter d'autres providers si nécessaire
  ]
})
.catch(err => console.error(err));