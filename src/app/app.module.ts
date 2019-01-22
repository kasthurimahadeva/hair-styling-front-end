import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

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

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,

    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot(),

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
    ]
})
export class AppModule
{
}
