import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from '../modules/stylist/profile/profile.component';
import {RequestListComponent} from '../modules/stylist/request-list/request-list.component';
import {NgModule} from '@angular/core';

const salonRoutes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(salonRoutes)],
    exports: [RouterModule]
})

export class StylistRoutingModule {
}
