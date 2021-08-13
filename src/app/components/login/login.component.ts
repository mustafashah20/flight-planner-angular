import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if(this.role === "admin"){
      this.router.navigate(['/admin-home']);
    }
    else{
      this.router.navigate(['/traveler-home']);
    }
  }

}
