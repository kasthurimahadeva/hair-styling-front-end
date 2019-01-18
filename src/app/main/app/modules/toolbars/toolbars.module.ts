import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonToolbarComponent } from './common-toolbar/common-toolbar.component';
import {MatToolbarModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule
  ],
  declarations: [
      CommonToolbarComponent
  ],

  exports: [
      CommonToolbarComponent
  ]

})
export class ToolbarsModule { }
