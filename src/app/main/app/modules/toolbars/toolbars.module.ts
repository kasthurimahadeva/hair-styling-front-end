import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonToolbarComponent } from './common-toolbar/common-toolbar.component';
import {MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [
      CommonToolbarComponent
  ],

  exports: [
      CommonToolbarComponent
  ]

})
export class ToolbarsModule { }
