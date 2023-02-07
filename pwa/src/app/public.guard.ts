import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState } from './store/app.state';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    console.log('canActivate');
    return this.store.pipe(
      select((state) => state.user),
      map((user) => {
        if (!!user.email && !!user.password) {
          this.router.navigateByUrl('/screen2');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
