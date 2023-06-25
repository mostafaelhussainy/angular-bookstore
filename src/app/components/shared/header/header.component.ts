import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedInUser: string = 'admin@example.com';
  isDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}

