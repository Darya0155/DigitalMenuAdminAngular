import { KeycloakService } from 'keycloak-angular';
import { BackendService } from './Backend';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  isLogin: boolean = false;

  constructor(private keycloakservice: KeycloakService) {}

  login(formData: any) {}

  logout() {
    this.keycloakservice.logout();
  }
}
