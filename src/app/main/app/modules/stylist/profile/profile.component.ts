import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],

})
export class ProfileComponent implements OnInit {

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
            // toolbar: {
            //     hidden: true
            // },
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
