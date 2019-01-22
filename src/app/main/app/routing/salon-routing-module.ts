import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { SearchStylistComponent } from '../modules/salon/search-stylist/search-stylist.component';
import { StylistDetailsComponent } from '../modules/salon/stylist-details/stylist-details.component';
import { BookingStylistComponent } from '../modules/salon/booking-stylist/booking-stylist.component';

const salonRoutes: Routes = [
    {
        path: 'salon-search',
        component: SearchStylistComponent
    },
    {
        path: 'stylist-details',
        component: StylistDetailsComponent
    },
    {
        path: 'booking-stylist',
        component: BookingStylistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(salonRoutes)],
    exports: [RouterModule]
})

export class StylistRoutingModule {
}
