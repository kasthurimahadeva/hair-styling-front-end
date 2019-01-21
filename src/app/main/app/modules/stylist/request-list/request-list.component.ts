import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../../../@fuse/animations';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FuseNavigationService} from '../../../../../../@fuse/components/navigation/navigation.service';
import {merge} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {FuseConfigService} from '../../../../../../@fuse/services/config.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class RequestListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'salon', 'work', 'location', 'date', 'actions'];
    taskDatabase: TaskHttpDao | null;
    database: Request[] = [];
    dataSource: MatTableDataSource<Request>;
    selection = new SelectionModel<Request>(true, []);
    badgeCount: number;

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient,
                private router: Router,
                private _fuseNavigationService: FuseNavigationService,
                private _fuseConfigService: FuseConfigService) {

        this.hideComponents();
    }

    ngOnInit(): void {
        this.hideComponents();
        // this.taskDatabase = new TaskHttpDao(this.http);
        //
        // // If the user changes the sort order, reset
        // // back to the first page.
        // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        //
        // merge(this.sort.sortChange, this.paginator.page)
        //     .pipe(
        //         startWith({}),
        //         switchMap(() => {
        //             this.isLoadingResults = true;
        //             // if (this.taskDatabase !== undefined) {
        //             //     return this.taskDatabase.getTasks();
        //             // }
        //             return this.taskDatabase!.getTasks(this.sort.active, this.sort.direction, this.paginator.pageIndex);
        //             // console.log(result);
        //             // return result;
        //         }),
        //         map(data => {
        //             // Flip flag to show that loading has finished.
        //             this.isLoadingResults = false;
        //             this.isRateLimitReached = false;
        //             this.resultsLength = 2;
        //
        //             return data;
        //         }),
        //         catchError(() => {
        //             this.isLoadingResults = false;
        //             // Catch if the GitHub API has reached its rate limit. Return empty dataSource.
        //             this.isRateLimitReached = true;
        //             return observableOf([]);
        //         })
        //     )
        //     .subscribe(data => {
        //         this.database = data;
        //         this.taskService.updateTaskTable(this.database);
        //         this.dataSource = new MatTableDataSource<Request>(this.database);
        //         this.badgeCount = this.database.length;
        //         this.updateTaskBadge();
        //
        //     });

    }

    // approveRequest(task: Task): void {
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
    //
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
    // updateTaskBadge(): void {
    //     // Update the badge title
    //     this._fuseNavigationService.updateNavigationItem('task', {
    //         badge: {
    //             title: this.badgeCount
    //         }
    //     });
    // }
    //
    // openDialog(task: Task): void {
    //     const isReject = false;
    //     const dialogRef = this.dialog.open(RejectCommentsComponent, {
    //         width: '500px',
    //         data: {isRejected: isReject, comments: this.comments}
    //     });
    //
    //     dialogRef.afterClosed().subscribe(result => {
    //         if (result.isRejected){
    //             this.comments['comment'] = result.comments;
    //             this.rejectRequest(task);
    //         }
    //     });
    // }

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

export class TaskHttpDao {
    constructor(private http: HttpClient) {
    }

    // getTasks(sort: string, order: string, page: number): Observable<Task[]> {
    //     const href = environment.server + 'v1/camunda/my-tasks';
    //     const requestUrl =
    //         `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    //
    //     return this.http.get<Task[]>(href);
    // }
}
