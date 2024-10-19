import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // CommonModule importálása

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],  // Add hozzá a CommonModule-t az imports tömbhöz
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies = [
    { id: 1, name: 'Avengers', imageUrl: 'https://via.placeholder.com/150?text=Avengers' },
    { id: 2, name: 'Batman', imageUrl: 'https://via.placeholder.com/150?text=Batman' },
    { id: 3, name: 'Spiderman', imageUrl: 'https://via.placeholder.com/150?text=Spiderman' }
  ];
}
