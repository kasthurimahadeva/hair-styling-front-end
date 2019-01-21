import { Component, OnInit } from '@angular/core';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
              private _formBuilder: FormBuilder) {
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
          country: ['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
          street: ['', Validators.required],
          zip: ['', Validators.required],
          telephoneNo: ['', Validators.required],

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

}
