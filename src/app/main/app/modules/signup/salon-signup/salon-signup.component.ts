import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

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
    private router: Router,
    private httpClient: HttpClient) {
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
        const salonData = Object.assign(this.personalInfoForm.value, this.paymentInfoForm.value);
        console.log(JSON.stringify(salonData));
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

            this.httpClient.post(environment.server + 'v1/salons/', salonData, {headers: headers, observe: 'response'}).subscribe(
                response => {
                    if (response.status === 200) {
                        console.log('Success');
                        // this.toastr.success('Leave request submitted', 'Success', {progressBar: true, progressAnimation: 'increasing'});
                    }
                },
                error => {
                    console.error(error);
                    // this.toastr.error('Could not submit the leave request', 'Failed');
                }
            );

        this.router.navigate(['login']);
    }

}
