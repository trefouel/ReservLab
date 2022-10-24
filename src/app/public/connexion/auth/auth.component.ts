import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { baseUrl } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import {
  faFacebook,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  active: boolean = true;
  timer: any;
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  // url = baseUrl;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faLinkedIn = faLinkedinIn;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder // private http: HttpClient
  ) {}

  ngOnInit(): void {
    //CREATION DU FORMULAIRE
    this.signUpForm = this.formBuilder.group({
      email: '',
      password: '',
      username: '',
      lastname: '',
      age: Number,
    });
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  //C'EST POUR LES FONCTIONNALITES
  onSignUp(): void {
    console.log(this.signUpForm.getRawValue());
    // this.http
    //   .post('http://localhost:2807/register', this.form.getRawValue())
    //   .pipe(
    //     tap((res) => {
    //       console.log(res);
    //       if (res) {
    //         this.slide('/home');
    //       }
    //     })
    //   )
    //   .subscribe();
  }

  onLogin(): void {
    console.log(this.loginForm.getRawValue());
  }

  //C'EST POUR LE DESIGN
  // slide(route: string) {
  //   this.timer = setTimeout(() => {
  //     this.route.navigateByUrl(route);
  //   }, 5000);
  // }
  login() { // route: string
    this.active = false;
    // this.slide(route);
  }
  toSignUp() {
    // clearTimeout(this.timer);
    this.active = true;
  }
}
