import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    authenticated = false;

    redirectUrl: string;

    constructor(private http: HttpClient, private router: Router) {}

    authenticate(credentials, callback): any {

        const headers = new HttpHeaders(
            {
            'content-type': 'application/json'
            }
        );

        this.http.post<any>('/auth', {username: credentials.username, password: credentials.password}, {headers: headers, observe: 'response'}).subscribe(
            response => {
                const token = response.headers.get('Authorization').substring(7);
                
                console.log(token);
                if (token) {
                    const helper = new JwtHelperService();
                    const decodedToken = helper.decodeToken(token);
                    const expirationDate = helper.getTokenExpirationDate(token);
                    const isExpired = helper.isTokenExpired(token);
                    localStorage.setItem('access_token', token);
                    localStorage.setItem('user', JSON.stringify(decodedToken));
                    localStorage.setItem('role', decodedToken.authorities[0].split('_')[1]);
                    console.log(expirationDate);
                    console.log(isExpired);
                    console.log(decodedToken);
                    this.authenticated = true;
                }
                return callback && callback();
            },
            error => {
                console.error(error);
            }

        );

        // this.http.get<any>('/api/auth/v1/user', { headers: headers }).subscribe(
        //     response => {
        //         console.log(JSON.stringify(response));
        //         if (response['name']) {
        //             this.authenticated = true;
        //             localStorage.setItem('principal', JSON.stringify(response));
        //             localStorage.setItem('authenticated', 'true');
        //             localStorage.setItem(
        //                 'currentUser',
        //                 btoa(credentials.username + ':' + credentials.password)
        //             );
        //         } else {
        //             localStorage.setItem('authenticated', 'false');
        //             this.authenticated = false;
        //         }
        //         return callback && callback();
        //     },
        //     error => {
        //         console.error(error);
        //         // // this.toastr.error('Username or password is incorrect', 'Login failed', {
        //         //     progressBar: true
        //         // });
        //     }
        // );
    }

    getLoggedInUserName(): string {
        const principal: any = localStorage.getItem('principal');
        if (principal !== null) {
            return JSON.parse(principal).name;
        } else {
            // this.router.navigate(['login']);
            return null;
        }
    }

    logout(): void {
        this.http
            .post(environment.server + 'logout', {})
            ._finally(() => {
                this.authenticated = false;
                localStorage.removeItem('access_token');
                localStorage.removeItem('principal');
                localStorage.removeItem('authenticated');
                localStorage.removeItem('currentUser');
                this.router.navigate(['login']);
            })
            .subscribe(
                () => {
                    console.log('log out success');
                },
                error => {
                    console.error(error);
                }
            );
    }
}
