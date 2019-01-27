import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {StylistRoutingModule} from '../../routing/stylist-routing.module';
import {MatIconModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
  MatSortModule, MatPaginatorModule, MatListModule} from '@angular/material';
import { RequestListComponent } from './request-list/request-list.component';
import {FuseSharedModule} from '../../../../../@fuse/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      StylistRoutingModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      BrowserModule,
      FormsModule,
      MatListModule,

      FuseSharedModule
  ],
  declarations: [ProfileComponent, RequestListComponent]
})
export class StylistModule { }
