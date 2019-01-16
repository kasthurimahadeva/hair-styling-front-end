import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonToolbarComponent } from './common-toolbar/common-toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CommonToolbarComponent
  ],

  exports: [
      CommonToolbarComponent
  ]

})
export class ToolbarsModule { }
