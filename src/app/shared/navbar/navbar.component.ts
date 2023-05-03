import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user; //iki ünlem: false geliyorsa true, true geliyorsa false getirir.
      this.isAdmin = user?.email == environment.adminEmail;
    });
  }
  logout() {
    this.authService.logout();
  }
}
