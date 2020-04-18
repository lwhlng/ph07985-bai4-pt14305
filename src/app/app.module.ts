import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { IndexcientComponent } from './indexcient/indexcient.component';
import { IndexclientComponent } from './indexclient/indexclient.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SliderComponent,
    ProductManagerComponent,
    HomeComponent,
    AboutComponent,
    IndexcientComponent,
    IndexclientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
