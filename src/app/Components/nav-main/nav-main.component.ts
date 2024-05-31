import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { IncomeFormComponent } from '../income/income-form/income-form.component';
import { AuthService } from '../../../Core/Service/auth.service';
//import * as bootstrap from "bootstrap";


@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [CommonModule , RouterLink ,IncomeFormComponent],
  templateUrl: './nav-main.component.html',
  styleUrl: './nav-main.component.css'
})
export class NavMainComponent {

  constructor(private _Router : Router , private _AuthService : AuthService) {}
  userEmail : string = "";

  handleLogout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this._Router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this._AuthService.decodeUser();
    this.userEmail = this._AuthService.userInfo["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
  }
}
