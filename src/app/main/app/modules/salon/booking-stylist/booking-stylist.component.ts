import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';
import {SalonService} from '../../../services/salon-service.service';
import {BookingService} from '../../../services/booking.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-booking-stylist',
  templateUrl: './booking-stylist.component.html',
  styleUrls: ['./booking-stylist.component.scss']
})
export class BookingStylistComponent implements OnInit {

    bookingForm: FormGroup;
    startingDate: Date;
    endingDate: Date;
    startMinDate = new Date();
    endMinDate = new Date();
    startMaxDate: Date;

    getStartDate(event: MatDatepickerInputEvent<Date>): void {
        this.startingDate = event.value;
    }

    assignMinDate(): void {
        if (this.startingDate !== null) {
            this.endMinDate = new Date(this.startingDate);
        }
        else {
            this.endMinDate = new Date();
        }
    }

    assignMaxDate(): void {
        if (this.endingDate !== null) {
            this.startMaxDate = new Date(this.endingDate);
        }
    }


    constructor(private _formBuilder: FormBuilder,
                private salonService: SalonService,
                private bookingService: BookingService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void{
        this.bookingForm = this._formBuilder.group({
            bookingDate: ['', Validators.required]
        });
  }

  book(): void {
        const email = localStorage.getItem('user["sub"]');
        const salon = this.salonService.getSalonDetails(email);
        const stylistId = this.route.snapshot.paramMap.get('stylistId');
        const bookingData = {
            stylistId: stylistId,
            salonId: salon.salonId,
            bookingDate: this.startingDate,
            status: 'pending'
        };

        this.bookingService.book(bookingData);
        this.router.navigate(['search-stylist']);

  }



}
