import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { SearchStylistComponent } from '../modules/salon/search-stylist/search-stylist.component';
import { StylistDetailsComponent } from '../modules/salon/stylist-details/stylist-details.component';
import { BookingStylistComponent } from '../modules/salon/booking-stylist/booking-stylist.component';
import {SearchStylistComponentResolver} from '../modules/salon/search-stylist/search-stylist.component.resolver';

const salonRoutes: Routes = [
    {
        path: 'search-stylist',
        component: SearchStylistComponent,
        resolve: {stylistsList: SearchStylistComponentResolver},
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

export class SalonRoutingModule {
}
