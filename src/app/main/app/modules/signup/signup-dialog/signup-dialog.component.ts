import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<SignupDialogComponent>,
                private _formBuilder: FormBuilder) {
    }

    types: string[] = ['Salon', 'Stylist'];
    signupDialogForm: FormGroup;
    userType: String;

    closeDialog(): void {
        this.dialogRef.close(this.userType);
    }

    ngOnInit(): void {
        this.signupDialogForm = this._formBuilder.group({
            userType: ['', Validators.required],
            policy: ['', Validators.required]
        });
    }

}


