import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ArtviewComponent } from './artview/artview.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'main-view', component: MainViewComponent },
  { path: 'artview', component: ArtviewComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
