import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public user: any = localStorage.getItem('user');
  constructor(private authService: AuthService, private router: Router) {}
  myObj: any;
  ngOnInit(): void {
    console.log(typeof this.user);
    this.myObj = JSON.parse(this.user);
    console.log(this.myObj?.firstName);
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
