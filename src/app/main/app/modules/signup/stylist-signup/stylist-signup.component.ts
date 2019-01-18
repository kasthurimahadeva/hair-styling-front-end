import { Component, OnInit } from '@angular/core';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';

@Component({
  selector: 'app-stylist-signup',
  templateUrl: './stylist-signup.component.html',
  styleUrls: ['./stylist-signup.component.scss']
})
export class StylistSignupComponent implements OnInit {

  constructor(private _fuseConfigService: FuseConfigService) {
      this.hideComponents();
  }

  ngOnInit(): void {
      this.hideComponents();
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
