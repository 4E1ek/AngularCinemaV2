import { Component } from '@angular/core';
import { BookingService, Booking } from '../services/booking.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  bookings: Booking[] = [];
  movies = [
    { id: 1, name: 'Avengers' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Spiderman' }
  ];

  constructor(private bookingService: BookingService, private router: Router) {
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
    });
  }

  // Ez a függvény az ID alapján visszaadja a film nevét
  getMovieName(movieId: number): string {
    const movie = this.movies.find(m => m.id === movieId);
    return movie ? movie.name : 'Ismeretlen film';
  }

  deleteBooking(id: number): void {
    this.bookings = this.bookings.filter((b) => b.id !== id); // Törli a foglalást a listából
  }

  editBooking(id: number): void {
    this.router.navigate(['/edit-booking', id]);
  }
}
