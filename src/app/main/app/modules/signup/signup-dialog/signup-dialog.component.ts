import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<SignupDialogComponent>,
                private _formBuilder: FormBuilder,
                private router: Router) {
    }

    types: string[] = ['Salon', 'Stylist'];
    signupDialogForm: FormGroup;
    userType: String;

    closeDialog(): void {
        this.dialogRef.close(this.userType);
        this.dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result === 'Salon') {
                this.router.navigate(['salon-signup']);
            }
            else if (result === 'Stylist') {
                this.router.navigate(['stylist-signup']);
            }
        });
    }

    ngOnInit(): void {
        this.signupDialogForm = this._formBuilder.group({
            userType: ['', Validators.required],
            policy: ['', Validators.required]
        });
    }

}


