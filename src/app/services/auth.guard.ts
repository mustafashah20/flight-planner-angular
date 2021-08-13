import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { reject, resolve } from 'protractor/node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        }
        else {
          console.log("User is not logged in!");
          this.router.navigate([''])
          resolve(false);
        }
      })
    })
  }

}
