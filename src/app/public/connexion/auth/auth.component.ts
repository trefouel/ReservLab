import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }
    signUp: boolean = false

    faFacebook = faFacebookF
    faGoogle = faGooglePlusG
    faLinkedIn = faLinkedinIn
  ngOnInit(): void {
  }

  login(){
    console.log("Login");

    this.signUp = false
  }
  toSignUp(){
    console.log("SignUp");

    this.signUp = true
  }





}
