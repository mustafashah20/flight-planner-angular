import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveler-home',
  templateUrl: './traveler-home.component.html',
  styleUrls: ['./traveler-home.component.css']
})
export class TravelerHomeComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickLogout(){
    this.router.navigate([''])
  }

}
