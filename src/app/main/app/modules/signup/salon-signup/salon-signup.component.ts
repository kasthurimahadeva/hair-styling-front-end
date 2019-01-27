import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { SalonService } from 'app/main/app/services/salon-service.service';

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
    cards = ['debit', 'visa'];
    skills = ['skill1', 'skill2', 'skill3'];

  constructor(private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private httpClient: HttpClient,
    private salonService: SalonService) {
      this.hideComponents();
  }

  ngOnInit(): void {
      this.hideComponents();

      this.personalInfoForm = this._formBuilder.group({
        salonName: ['', Validators.required],
        ownerName: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        zip: ['', Validators.required],
        telephoneNo: ['', Validators.required],
        tagline: ['', Validators.required],
        website: ['', Validators.required]

    });

    this.paymentInfoForm = this._formBuilder.group({
        cardType: ['', Validators.required],
        cardHolderName: ['', Validators.required],
        cardNo: ['',  Validators.required],
        cardYear: ['', Validators.required],
        cardMonth: ['', Validators.required],
        cvcCode: ['', Validators.required]
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
        const salonData = this.personalInfoForm.value;
        console.log(JSON.stringify(salonData));
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

            // const url = environment.server + 'salons/';
            // console.log(url);
            // this.httpClient.post(url, salonData, {headers: headers, observe: 'response'}).subscribe(
            //     response => {
            //         if (response.status === 200) {
            //             console.log('Success');
            //             // this.toastr.success('Leave request submitted', 'Success', {progressBar: true, progressAnimation: 'increasing'});
            //         }
            //     },
            //     error => {
            //         console.error(error);
            //         // this.toastr.error('Could not submit the leave request', 'Failed');
            //     }
            // );

            this.salonService.registerSalon(salonData).subscribe(
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
