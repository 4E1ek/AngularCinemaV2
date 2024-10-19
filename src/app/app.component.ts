import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MovieListComponent],  // Standalone komponens importálása
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCinemaV2';
}
