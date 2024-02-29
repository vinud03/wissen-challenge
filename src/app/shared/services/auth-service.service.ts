import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  canMatch(route: Route, segments: UrlSegment[]) {
    if(!!localStorage.getItem('loggedIn')) {
      return true
    }
    if(route.path === 'login') {
      return true
    }
    this.router.navigate(['/login']);
    return false
  }
}
