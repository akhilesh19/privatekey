import { Routes,RouterModule,PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { formComponent } from './forms/form.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'form', component: formComponent },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, { preloadingStrategy: PreloadAllModules });
