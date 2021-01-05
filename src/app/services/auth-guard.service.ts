import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  authState: any = null;

  constructor(private auth: AuthService, private router: Router) {
    this.authState = this.auth.getAuthState();
  }

  canActivate(): Observable<boolean> {
    return this.auth.getAuthState().pipe(map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }));
  }
}
