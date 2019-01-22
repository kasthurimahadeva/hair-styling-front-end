import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchStylistComponent } from './search-stylist/search-stylist.component';
import { StylistDetailsComponent } from './stylist-details/stylist-details.component';
import { BookingStylistComponent } from './booking-stylist/booking-stylist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchStylistComponent, StylistDetailsComponent, BookingStylistComponent]
})
export class SalonModule { }
