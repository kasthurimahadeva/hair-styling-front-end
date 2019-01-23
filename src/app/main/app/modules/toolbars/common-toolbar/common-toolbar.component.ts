import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-toolbar',
  templateUrl: './common-toolbar.component.html',
  styleUrls: ['./common-toolbar.component.scss']
})
export class CommonToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSignupDialog(): void {
    // const dialogRef = this.dialog.open(SignupDialogComponent, {width: '500px', height: '200px'});
    // dialogRef.afterClosed().subscribe(result => {
    //     console.log(result);
    //     if (result === 'Salon') {
    //         this.router.navigate(['salon-signup']);
    //     }
    //     else if (result === 'Stylist') {
    //         this.router.navigate(['stylist-signup']);
    //     }
    // });
  }
}
