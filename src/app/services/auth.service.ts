import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated: boolean = false;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.authenticated = false;
  }

  login(email: string, password: string){
    return this.auth.auth.signInWithEmailAndPassword(email, password)
  }

  getAuthState(){
    return this.auth.authState;
  }

  async signout(){
    await this.auth.auth.signOut();
    await this.router.navigate(['/'])
  }
}
