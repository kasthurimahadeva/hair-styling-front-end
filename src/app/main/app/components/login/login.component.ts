import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations/index';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {SignupDialogComponent} from '../../modules/signup/signup-dialog/signup-dialog.component';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        public dialog: MatDialog
        // private authService: AuthenticationService
    ) {
        // Configure the layout
        this.hideComponents();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // this.authService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.hideComponents();

        this.loginForm = this._formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    private hideComponents(): void {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    openSignupDialog(): void {
        const dialogRef = this.dialog.open(SignupDialogComponent, {width: '800px', height: '400px'});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

    login(): void {
        // this.authService
        //     .authenticate({
        //             username: this.loginForm.controls['userName'].value,
        //             password: this.loginForm.controls['password'].value
        //         }
        //         , () => {
        //             console.log('logged in successfully');
        //             this.router.navigate(['dashboard']);
        //         });
        // return false;
    }
}
