import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  temp: String = "this is working"
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.temp)
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
