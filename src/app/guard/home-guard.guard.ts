import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,CanActivateFn, Router } from
'@angular/router';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class homeGuardGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('isConnected')=="true") {
      console.log(Boolean(localStorage.getItem('isConnected')))
    return true;
    }
    else {
    //this.router.navigateByUrl('/auth');
      this.router.navigate(['/login']);
      return false;
    }
    }
}
