import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CountdownModule } from 'ngx-countdown';
// import {CountDown} from "ng2-date-countdown";
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { formComponent } from './forms/form.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CommonService } from './Services/CommonService';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductDetailsComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    LoginComponent,
    // formComponent,
    HomeComponent,
    ContactComponent
    // ,
    //  CountDown
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CountdownModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    GithubService,
    CommonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
