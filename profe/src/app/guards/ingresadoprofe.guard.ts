import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IngresadoprofeGuard implements CanActivate {

  constructor(private navController:NavController){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){
        this.navController.navigateRoot('inicioprofe')
        return true;
      }
      else{
        this.navController.navigateRoot('eleccion');
        return false;
      }
  }
  
}
