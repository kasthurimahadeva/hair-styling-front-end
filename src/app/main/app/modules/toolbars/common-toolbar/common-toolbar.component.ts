import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-common-toolbar',
  templateUrl: './common-toolbar.component.html',
  styleUrls: ['./common-toolbar.component.scss']
})
export class CommonToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openSignup(): void {
    this.router.navigate(['signup']);
  }
}
