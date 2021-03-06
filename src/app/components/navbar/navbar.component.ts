import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  faSignOutAlt = faSignOutAlt;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onClickLogout() {
    this.auth.signOut();
    this.router.navigate([''])
  }
}
