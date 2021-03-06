import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onClickLogin() {
    if (!this.email || !this.password) {
      alert("Enter credentials to login");
      return
    }
    this.authService.signIn(this.email, this.password);
  }

}
