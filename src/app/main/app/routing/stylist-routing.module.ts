import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from '../modules/stylist/profile/profile.component';
import {RequestListComponent} from '../modules/stylist/request-list/request-list.component';

const stylistRoutes: Routes = [
    {
        path: 'stylist-profile',
        component: ProfileComponent
    },
    {
        path: 'stylist-request',
        component: RequestListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(stylistRoutes)],
    exports: [RouterModule]
})

export class StylistRoutingModule {
}
