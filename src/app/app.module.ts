import { NgModule } from '@angular/core';
import {RouterModule} from'@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ErrorComponent } from './pages/error/error.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { FilteredComponent } from './pages/filtered/filtered.component'
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    NavbarComponent,
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    ProductsPageComponent,
    SubCategoryComponent,
    ProductsComponent,
    ProductDetailPageComponent,
    RegisterPageComponent,
    ErrorComponent,
    LoginComponent,
    FilteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
