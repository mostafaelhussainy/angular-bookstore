import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  emailTouched: boolean = false;
  passwordTouched: boolean = false;

  constructor(private router: Router) { }

  login(): void {
    this.emailTouched = true;
    this.passwordTouched = true;

    this.emailInvalid = !this.email || !this.validateEmailFormat(this.email);
    this.passwordInvalid = !this.password;

    if (!this.emailInvalid && !this.passwordInvalid) {
      // Save user credentials in session storage
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('email', this.email);
      // Redirect to the books list page
      this.router.navigate(['/books']);
    }
  }

  validateEmailFormat(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showPassword: boolean = false;
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
