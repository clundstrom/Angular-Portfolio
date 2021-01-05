import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticated: boolean = false;
  showError: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('')
  });

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {


  }

  hasEmptyFields(): boolean {
    if (this.loginForm.controls.email.value === '' || this.loginForm.controls.password.value === '') {
      this.showError = false;
      return true;
    }
    else {
      return false;
    }
  }

  login() {
      this.auth.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
        .then((success) => {
          this.authenticated = true;
        })
        .catch((err) => {
          this.authenticated = false;
          this.showError = true;
        }).then( () => {
          if(this.authenticated){
            this.router.navigate(['/admin']);
          }
      });
  }


}
