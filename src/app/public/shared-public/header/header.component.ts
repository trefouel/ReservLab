import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  mobile: boolean = false;
  logUp: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleNav() {
    if (this.mobile == false) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  toggleAuth() {
    if (this.router.url === '/connexion') {
      if (this.logUp == false) {
        this.logUp = true;
      } else {
        this.logUp = false;
      }
    } else {
      this.logUp = false;
    }
  }
}
