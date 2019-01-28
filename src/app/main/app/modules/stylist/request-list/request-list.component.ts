import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../../../@fuse/animations';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FuseNavigationService} from '../../../../../../@fuse/components/navigation/navigation.service';
import {BehaviorSubject, merge} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';
import {BookingService} from '../../../services/booking.service';
import {StylistService} from '../../../services/stylist-service.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class RequestListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'salon', 'work', 'location', 'date', 'actions'];
    database: Request[] = [];
    dataSource: MatTableDataSource<Request>;
    selection = new SelectionModel<Request>(true, []);
    private taskSource = new BehaviorSubject(this.database);

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private bookingService: BookingService,
                private router: Router,
                private _fuseNavigationService: FuseNavigationService,
                private _fuseConfigService: FuseConfigService,
                private stylistService: StylistService) {

        this.hideComponents();
    }

    ngOnInit(): void {
        this.hideComponents();
        const email = localStorage.getItem('user["sub"]');
        const stylistId = this.stylistService.getStylistDetails(email).stylistId;
        this.database = this.bookingService.getRequests(stylistId);
        this.updateTaskTable(this.database);
        this.dataSource = new MatTableDataSource<Request>(this.database);
    }

    // approveRequest(task: Request): void {
    //     const postUrl = environment.server + 'v1/camunda/leave/complete/' + task.taskId + '/true';
    //     this.http.post(postUrl, this.comments, {observe: 'response'}).subscribe(
    //         response => {
    //             if (response.status === 200) {
    //                 this.dataSource.data.splice((this.dataSource.data.indexOf(this.dataSource.data.filter((t) => t.taskId === task.taskId)[0])), 1);
    //                 this.dataSource = new MatTableDataSource<Task>(this.dataSource.data);
    //                 this.selection = new SelectionModel<Task>(true, []);
    //                 this.badgeCount = this.database.length;
    //                 this.updateTaskBadge();
    //                 this.toastr.success('Request approved', 'Success');
    //
    //             }
    //         },
    //         error => {
    //             console.error(error);
    //             this.toastr.error('Could not approve', 'Failed');
    //         }
    //     );
    //     this.router.navigate(['tasks']);
    // }

    // rejectRequest(task: Task): void {
    //     const postUrl = environment.server + 'v1/camunda/leave/complete/' + task.taskId + '/false';
    //     this.http.post(postUrl, this.comments, {observe: 'response'}).subscribe(
    //         response => {
    //             if (response.status === 200) {
    //                 this.dataSource.data.splice((this.dataSource.data.indexOf(this.dataSource.data.filter((t) => t.taskId === task.taskId)[0])), 1);
    //                 this.dataSource = new MatTableDataSource<Task>(this.dataSource.data);
    //                 this.selection = new SelectionModel<Task>(true, []);
    //                 this.badgeCount = this.database.length;
    //                 this.updateTaskBadge();
    //                 this.toastr.success('Request rejected', 'Success');
    //
    //             }
    //         },
    //         error => {
    //             console.error(error);
    //             this.toastr.error('Could not reject', 'Failed');
    //         }
    //     );
    //
    //     this.router.navigate(['tasks']);
    // }
    //



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

    updateTaskTable(task: Request[]): void{
        this.taskSource.next(task);
    }

}