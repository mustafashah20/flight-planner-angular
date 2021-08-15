import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveler-home',
  templateUrl: './traveler-home.component.html',
  styleUrls: ['./traveler-home.component.css']
})
export class TravelerHomeComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  faSignOutAlt = faSignOutAlt;
  
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onClickLogout(){
    this.auth.signOut();
    this.router.navigate(['']);
  }

}
