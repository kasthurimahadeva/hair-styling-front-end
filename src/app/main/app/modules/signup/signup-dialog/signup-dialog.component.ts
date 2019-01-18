import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignupDialogComponent>) {}

    types: string[] = ['Salon', 'Stylist'];

    closeDialog(): void {
        this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
