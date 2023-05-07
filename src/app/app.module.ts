import { BasicIntercepter } from './service/BasicIntercepter';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppMaterialModule } from './app.material.module';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AuthGard } from './service/AuthGard';
import { LoginService } from './service/LoginService';
import { TextInputComponent } from './resusablecomponents/text-input/text-input.component';
import { BreakPointService } from './service/BreakPointService';
import { BackendService } from './service/Backend';
import { initializeKeycloak } from './service/KeyClockconfigFunction';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { MenuModificationPageComponent } from './home/menu-modification-page/menu-modification-page.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    WelcomeComponent,
    TextInputComponent,
    MenuModificationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMaterialModule,
    CommonModule,
    KeycloakAngularModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BasicIntercepter, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    AuthGard,
    LoginService,
    BreakPointService,
    BackendService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
