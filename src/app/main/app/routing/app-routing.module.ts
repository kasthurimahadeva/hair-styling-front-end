import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../components/login/login.component';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
