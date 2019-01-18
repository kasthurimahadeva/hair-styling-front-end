import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylistSignupComponent } from './stylist-signup/stylist-signup.component';
import {SignupRoutingModule} from '../../routing/signup-routing.module';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import {MatDialogModule, MatFormFieldModule, MatRadioModule} from '@angular/material';
import { SalonSignupComponent } from './salon-signup/salon-signup.component';

@NgModule({
  imports: [
      CommonModule,
      SignupRoutingModule,
      MatDialogModule,
      MatRadioModule,
      MatFormFieldModule
  ],
  declarations: [StylistSignupComponent, SignupDialogComponent, SalonSignupComponent],
    entryComponents: [SignupDialogComponent]
})
export class SignupModule { }
