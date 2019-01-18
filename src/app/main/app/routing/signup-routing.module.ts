import {RouterModule, Routes} from '@angular/router';
import {StylistSignupComponent} from '../modules/signup/stylist-signup/stylist-signup.component';
import {NgModule} from '@angular/core';

const signupRoutes: Routes = [
    {
        path: 'stylist-signup',
        component: StylistSignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(signupRoutes)],
    exports: [RouterModule]
})

export class SignupRoutingModule {
}
