import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchStylistComponent } from './search-stylist/search-stylist.component';
import {SalonRoutingModule} from '../../routing/salon-routing-module';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatTableModule} from '@angular/material';
import {FuseSharedModule} from '../../../../../@fuse/shared.module';
import {SearchStylistComponentResolver} from './search-stylist/search-stylist.component.resolver';
import {BookingStylistComponent} from './booking-stylist/booking-stylist.component';

@NgModule({
  imports: [
    CommonModule,
      SalonRoutingModule,

      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,

      FuseSharedModule
  ],

   providers: [SearchStylistComponentResolver],
  declarations: [SearchStylistComponent, BookingStylistComponent]
})
export class SalonModule { }
