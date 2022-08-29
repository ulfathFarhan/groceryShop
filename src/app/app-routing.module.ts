import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guard/auth.guard';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorComponent } from './pages/error/error.component';
import { FilteredComponent } from './pages/filtered/filtered.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'products/:catId',
    component: ProductsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/details/:id',
    component: ProductDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/sub/:subId',
    component: FilteredComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutPageComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
