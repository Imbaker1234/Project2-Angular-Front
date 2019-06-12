import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginViewComponent} from './login-view/login-view.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {MainViewComponent} from './main-view/main-view.component';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginViewComponent,
    SignInComponent,
    MainViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
