import { Component, OnInit } from '@angular/core';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

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
    skills = ['skill1', 'skill2', 'skill3'];


  constructor(private _fuseConfigService: FuseConfigService,
              private _formBuilder: FormBuilder,
              private router: Router) {
      this.hideComponents();
      const controls = this.skills.map(a => new FormControl(false));
      controls[0].setValue(true);

      this.professionalInfoForm = this._formBuilder.group({
          skills: new FormArray(controls)
      });

  }

  ngOnInit(): void {
      this.hideComponents();
      this.personalInfoForm = this._formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
          country: ['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
          street: ['', Validators.required],
          zip: ['', Validators.required],
          telephoneNo: ['', Validators.required],

      });

      this.professionalInfoForm = this._formBuilder.group({
          tagLine: ['', Validators.required],
          description: ['', Validators.required],
          experience: ['', Validators.required],
          rate: ['', Validators.required],
          linkedIn: ['', Validators.required]
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
            console.log(this.professionalInfoForm.value);
            this.router.navigate(['login']);
        }

}
