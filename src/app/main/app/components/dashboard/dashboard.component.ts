import { Component, OnInit } from '@angular/core';
import {FuseConfigService} from '../../../../../@fuse/services/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
