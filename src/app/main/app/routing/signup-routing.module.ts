import {RouterModule, Routes} from '@angular/router';
import {StylistSignupComponent} from '../modules/signup/stylist-signup/stylist-signup.component';
import {NgModule} from '@angular/core';
import { SalonSignupComponent } from '../modules/signup/salon-signup/salon-signup.component';

const signupRoutes: Routes = [
    {
        path: 'stylist-signup',
        component: StylistSignupComponent
    },

    {
        path: 'salon-signup',
        component: SalonSignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(signupRoutes)],
    exports: [RouterModule]
})

export class SignupRoutingModule {
}
