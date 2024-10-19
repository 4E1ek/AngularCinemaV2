import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // CommonModule importálása
import { Router } from '@angular/router';
import { BookingService, Booking } from '../services/booking.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Itt hozzáadjuk a CommonModule-t
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  booking: Booking = {
    id: 0,
    name: '',
    movie: '',
    seats: 1,
    date: ''
  };

  // A filmek listája azonosítóval
  movies = [
    { id: 1, name: 'Avengers' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Spiderman' }
  ];

  constructor(private bookingService: BookingService, private router: Router) {}

  createBooking(): void {
    this.bookingService.createBooking(this.booking).subscribe(() => {
      this.router.navigate(['/bookings']);
    });
  }
}
