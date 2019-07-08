import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginViewComponent} from './login-view/login-view.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainViewComponent} from './main-view/main-view.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CommonModule} from '@angular/common';
// Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {RegisterComponent} from './register/register.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ArtviewComponent} from './artview/artview.component';
import {CommentComponent} from './comment/comment.component';
import {CommentslistComponent} from './commentslist/commentslist.component';
import {AboutComponent} from './about/about.component';
import {CommentbuttonComponent} from './commentbutton/commentbutton.component';
import {CommentlistcontainerComponent} from './commentlistcontainer/commentlistcontainer.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {StumbleuponComponent} from './stumbleupon/stumbleupon.component';
import {NewsComponent} from './news/news.component';
import {ShowingsComponent} from './showings/showings.component';
import {ShowingComponent} from './showing/showing.component';
import {FavoriteArtComponent} from './favorite-art/favorite-art.component';
import {ArtpieceComponent} from './artpiece/artpiece.component';
import {CarouselComponent} from './carousel/carousel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
<<<<<<< HEAD
import { ArticlesComponent } from './articles/articles.component';
import { MediumsComponent } from './mediums/mediums.component';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';
import { ShowingsFormComponent } from './showings-form/showings-form.component';
import { DeleteComponent } from './delete/delete.component';
import { HeartComponent } from './heart/heart.component';
import {HttpinterceptorService} from './httpinterceptor.service';
import { CommentFormComponent } from './comment-form/comment-form.component';
=======
import {ArticlesComponent} from './articles/articles.component';
import {MediumsComponent} from './mediums/mediums.component';
import {NewsCarouselComponent} from './news-carousel/news-carousel.component';
import {ShowingsFormComponent} from './showings-form/showings-form.component';
import {DeleteComponent} from './delete/delete.component';
import {HeartComponent} from './heart/heart.component';
import {LogoutButtonComponent} from './logout-button/logout-button.component';
import {DontForgetYourJWTService} from './dont-forget-your-j-w-t.service';
import {ThanksForTheJWTService} from './thanks-for-the-jwt.service';
>>>>>>> 82f99643ec4a54d59f3c1a8f360eb02d4715f43d

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SignInComponent,
    MainViewComponent,
    NavbarComponent,
    RegisterComponent,
    WelcomeComponent,
    ArtviewComponent,
    CommentComponent,
    CommentslistComponent,
    AboutComponent,
    CommentbuttonComponent,
    CommentlistcontainerComponent,
    UserDashboardComponent,
    StumbleuponComponent,
    NewsComponent,
    ShowingsComponent,
    ShowingComponent,
    FavoriteArtComponent,
    ArtpieceComponent,
    CarouselComponent,
    FavoriteArtComponent,
    ArticlesComponent,
    MediumsComponent,
    NewsCarouselComponent,
    ShowingsFormComponent,
    DeleteComponent,
    HeartComponent,
    LogoutButtonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ScrollingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DontForgetYourJWTService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ThanksForTheJWTService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
