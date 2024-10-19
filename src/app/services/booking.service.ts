import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Booking {
  id: number;
  name: string;
  movie: string;
  seats: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];

  constructor() { }

  // Új foglalás létrehozása
  createBooking(booking: Booking): Observable<Booking> {
    booking.id = this.bookings.length + 1; // Ideiglenes ID generálás
    this.bookings.push(booking);
    return of(booking);
  }

  // Foglalások lekérdezése
  getBookings(): Observable<Booking[]> {
    return of(this.bookings);
  }

  // Foglalás lekérdezése ID alapján
  getBookingById(id: number): Observable<Booking | undefined> {
    const booking = this.bookings.find(b => b.id === id);
    return of(booking);
  }
}
