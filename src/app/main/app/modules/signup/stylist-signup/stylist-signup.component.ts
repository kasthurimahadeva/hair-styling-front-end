import { Component, OnInit } from '@angular/core';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {StylistService} from '../../../services/stylist-service.service';

@Component({
  selector: 'app-stylist-signup',
  templateUrl: './stylist-signup.component.html',
  styleUrls: ['./stylist-signup.component.scss']
})
export class StylistSignupComponent implements OnInit {
    personalInfoForm: FormGroup;
    professionalInfoForm: FormGroup;
    paymentInfoForm: FormGroup;
    types = ['Male', 'Female'];
    countries = ['Sri Lanka', 'India'];
    skills = ['Hair coloring', 'Hair cutting', 'Bob cut', 'Ponytail'];


  constructor(private _fuseConfigService: FuseConfigService,
              private _formBuilder: FormBuilder,
              private router: Router,
              private stylistService: StylistService) {
      this.hideComponents();

  }

  ngOnInit(): void {
      this.hideComponents();
      this.personalInfoForm = this._formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          country: ['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
          street: ['', Validators.required],
          zip: ['', Validators.required],
          telephoneNumber: ['', Validators.required],

      });

      this.professionalInfoForm = this._formBuilder.group({
          tagline: ['', Validators.required],
          description: ['', Validators.required],
          experience: ['', Validators.required],
          skill: ['', Validators.required],
          rate: ['', Validators.required],
          linkedin: ['', Validators.required]
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

    submitForm(): void {
        const stylistData = Object.assign(this.personalInfoForm.value, this.professionalInfoForm.value);
        console.log(JSON.stringify(stylistData));
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        this.stylistService.registerStylist(stylistData).subscribe(
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
