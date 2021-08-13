import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onClickSignup() {
    if (!this.email || !this.password) {
      alert("Enter credentials to signup");
      return
    }
    this.authService.signUp(this.email, this.password);
  }

}
