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
import { StarRatingModule } from 'angular-star-rating';
import { RequestListDetailsComponent } from './request-list-details/request-list-details.component';

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
      StarRatingModule.forRoot(),
      MatListModule,

      FuseSharedModule
  ],
  declarations: [ProfileComponent, RequestListComponent, RequestListDetailsComponent]
})
export class StylistModule { }
