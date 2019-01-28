import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../../../@fuse/animations';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import {Stylist} from './stylist.model';
import {StylistService} from '../../../services/stylist-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-stylist',
  templateUrl: './search-stylist.component.html',
  styleUrls: ['./search-stylist.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class SearchStylistComponent implements OnInit {
    dataSource = [];
    displayedColumns = ['image', 'name', 'skill', 'rate', 'country', 'city', 'action'];
    stylistsList = [];
    images = ['Abbott.jpg',
    'alice.jpg' ,
    'andrew.jpg' ,
    'Arnold.jpg' ,
    'Barrera.jpg' ,
    'Blair.jpg' ,
    'Boyle.jpg' ,
    'carl.jpg' ,
    'Christy.jpg' ,
    'Copeland.jpg' ,
    'danielle.jpg' ,
    'Estes.jpg' ,
    'garry.jpg' ,
    'Harper.jpg' ,
    'Helen.jpg' ,
    'Henderson.jpg' ,
    'james.jpg' ,
    'jane.jpg' ,
    'Josefina.jpg' ,
    'joyce.jpg' ,
    'katherine.jpg' ,
    'Katina.jpg' ,
    'Lily.jpg' ,
    'Mai.jpg' ,
    'Nancy.jpg',
    'Nora.jpg' ,
    'Odessa.jpg' ,
    'profile.jpg' ,
    'Reyna.jpg' ,
    'Shauna.jpg' ,
    'Shepard.jpg' ,
    'Tillman.jpg',
    'Trevino.jpg' ,
    'Tyson.jpg' ,
    'Velazquez.jpg' ,
    'vincent.jpg'];

    input = '';

  constructor(private _fuseConfigService: FuseConfigService,
              private stylistService: StylistService,
              private route: ActivatedRoute,
              private router: Router) {
    this.hideComponents();
    console.log(this.input);
  }


  ngOnInit(): void {
      this.hideComponents();
      this.stylistsList = this.route.snapshot.data['stylistsList'];
      this.stylistsList.map((stylist) => this.addImage(stylist));
      this.dataSource = this.stylistsList;
      console.log(this.stylistsList);
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

    addImage(stylist: Stylist): void {
      stylist.imagePath = '/assets/images/avatars/' + this.images[this.stylistsList.indexOf(stylist)];
    }


    getInput(event: any): void {
        this.input = event.target.value;
    }

    search(): void {
        console.log(this.input);
        this.dataSource = this.stylistService.searchStylistsBySkill(this.input);

    }

}

