import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../components/login/login.component';
import {SignupComponent} from '../components/signup/signup.component';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
