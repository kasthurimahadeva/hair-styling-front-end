import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchStylistComponent } from './search-stylist/search-stylist.component';
import { StylistDetailsComponent } from './stylist-details/stylist-details.component';
import { BookingStylistComponent } from './booking-stylist/booking-stylist.component';
import {SalonRoutingModule} from '../../routing/salon-routing-module';
import {MatButtonModule, MatIconModule, MatTableModule} from '@angular/material';
import {FuseSharedModule} from '../../../../../@fuse/shared.module';
import {SearchStylistComponentResolver} from './search-stylist/search-stylist.component.resolver';

@NgModule({
  imports: [
    CommonModule,
      SalonRoutingModule,

      MatIconModule,
      MatButtonModule,
      MatTableModule,

      FuseSharedModule
  ],

   providers: [SearchStylistComponentResolver],
  declarations: [SearchStylistComponent, StylistDetailsComponent, BookingStylistComponent]
})
export class SalonModule { }
