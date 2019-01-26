import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupDialogComponent} from '../../modules/signup/signup-dialog/signup-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {FuseConfigService} from '../../../../../@fuse/services/config.service';
import {fuseAnimations} from '../../../../../@fuse/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class SignupComponent implements OnInit {

    signupForm: FormGroup;

  constructor(private dialog: MatDialog,
              private router: Router,
              private _fuseConfigService: FuseConfigService,
              private _formBuilder: FormBuilder) {
      this.hideComponents();
  }

  ngOnInit(): void {
      this.hideComponents();

      this.signupForm = this._formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });
  }

    signup(): void {
        const dialogRef = this.dialog.open(SignupDialogComponent, {width: '500px', height: '200px'});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result === 'Salon') {
                this.router.navigate(['salon-signup']);
            }
            else if (result === 'Stylist') {
                this.router.navigate(['stylist-signup']);
            }

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

    login(): void {
      this.router.navigate(['login']);
    }
}
