import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salon-signup',
  templateUrl: './salon-signup.component.html',
  styleUrls: ['./salon-signup.component.scss']
})
export class SalonSignupComponent implements OnInit {
    personalInfoForm: FormGroup;
    paymentInfoForm: FormGroup;
    types = ['Male', 'Female'];
    countries = ['Sri Lanka', 'India'];
    skills = ['skill1', 'skill2', 'skill3'];

  constructor(private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private router: Router) {
      this.hideComponents();
  }

  ngOnInit(): void {
      this.hideComponents();
      this.personalInfoForm = this._formBuilder.group({
        salonName: ['', Validators.required],
        ownerName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        zip: ['', Validators.required],
        telephoneNo: ['', Validators.required],
        tagLine: ['', Validators.required],
        webSite: ['', Validators.required]

    });

    this.paymentInfoForm = this._formBuilder.group({
        name: ['', Validators.required],
        bankName: ['', Validators.required],
        branch: ['',  Validators.required],
        accountNo: ['', Validators.required]
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

    public submitForm(): void {
        console.log(this.personalInfoForm.value);
        this.router.navigate(['login']);
    }

}
