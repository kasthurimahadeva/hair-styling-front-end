import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { DashboardComponent } from './main/app/components/dashboard/dashboard.component';
import {AppRoutingModule} from './main/app/routing/app-routing.module';
import { LoginComponent } from './main/app/components/login/login.component';
import {ToolbarsModule} from './main/app/modules/toolbars/toolbars.module';
import {SignupModule} from './main/app/modules/signup/signup.module';
import {StylistModule} from './main/app/modules/stylist/stylist.module';
import {SalonModule} from './main/app/modules/salon/salon.module';
import { SalonService } from './main/app/services/salon-service.service';
import { AuthenticationService } from './main/app/services/authentication.service';
import { BasicAuthInterceptor } from './main/app/interceptor/login.interceptor';
import { Observable } from 'rxjs';
import { SignupComponent } from './main/app/components/signup/signup.component';
import {StylistService} from './main/app/services/stylist-service.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
}

export function tokenGetter() {
    return localStorage.getItem('access_token');
}

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        SignupComponent,

    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot(),

        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                blacklistedRoutes: ['/auth/register',
                '/api/v1/stylists/create',
                '/auth'
            ]
            }
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        AppRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,

        FuseSharedModule,

        ToolbarsModule,
        SignupModule,
        StylistModule,
        SalonModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [
        SalonService,
        StylistService,
        AuthenticationService,
        {

            provide: HTTP_INTERCEPTORS,
            useClass: BasicAuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: XhrInterceptor,
            multi: true
        },
    ]
})
export class AppModule
{
}
