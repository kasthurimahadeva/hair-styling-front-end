import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylistSignupComponent } from './stylist-signup/stylist-signup.component';
import {SignupRoutingModule} from '../../routing/signup-routing.module';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule
} from '@angular/material';
import { SalonSignupComponent } from './salon-signup/salon-signup.component';
import {FuseSharedModule} from '../../../../../@fuse/shared.module';

@NgModule({
  imports: [
      CommonModule,
      SignupRoutingModule,
      MatDialogModule,
      MatRadioModule,
      MatFormFieldModule,
      MatButtonModule,
      FuseSharedModule,
      MatCheckboxModule,
      MatStepperModule,
      MatInputModule,
      MatIconModule,
      MatSelectModule
  ],
  declarations: [StylistSignupComponent, SignupDialogComponent, SalonSignupComponent],
    entryComponents: [SignupDialogComponent]
})
export class SignupModule { }
