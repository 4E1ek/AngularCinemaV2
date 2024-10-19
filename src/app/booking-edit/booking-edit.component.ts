import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService, Booking } from '../services/booking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {
  booking: Booking | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookingService.getBookingById(id).subscribe((booking) => {
      this.booking = booking;
    });
  }

  updateBooking(): void {
    if (this.booking) {
      this.bookingService.createBooking(this.booking).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
