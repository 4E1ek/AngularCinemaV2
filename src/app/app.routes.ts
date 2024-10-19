import { Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
  { path: '', component: BookingListComponent },
  { path: 'movie-list', component: MovieListComponent},
  { path: 'new-booking', component: BookingFormComponent },
  { path: 'edit-booking/:id', component: BookingEditComponent }
];
