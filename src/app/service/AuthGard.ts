import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './LoginService';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthGard extends KeycloakAuthGuard {
  constructor(router: Router, private keycloak: KeycloakService) {
    super(router, keycloak);
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    console.log(this.authenticated);
    if (!this.authenticated) {
      this.keycloak.login({
        redirectUri: environment.keycloak_redirect_url,
      });
    }

    return this.authenticated;
  }

  // constructor(public loginService: LoginService, public route: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   if (!this.loginService.isLogin) {
  //     this.route.navigate(['/login']);
  //   }
  //   return true;
  // }
}
