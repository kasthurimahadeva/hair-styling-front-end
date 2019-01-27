import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Stylist} from './stylist.model';
import {StylistService} from '../../../services/stylist-service.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class SearchStylistComponentResolver implements Resolve<Stylist> {
    processInstanceId: string;

    constructor(private stylistService: StylistService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stylist> | Promise<Stylist>
        | Stylist {
        return this.stylistService.getStylistsList().pipe(map(stylistsList => stylistsList));
    }
}
