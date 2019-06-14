import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginViewComponent} from './login-view/login-view.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {MainViewComponent} from './main-view/main-view.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CommonModule} from '@angular/common';
import { Register2Component } from './register2/register2.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewsComponent } from './news/news.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginViewComponent,
    SignInComponent,
    MainViewComponent,
    NavbarComponent,
    Register2Component,
    ArticlesComponent,
    NewsComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
