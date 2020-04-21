import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './about/about.component';
import { IndexclientComponent } from './indexclient/indexclient.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'client', pathMatch: 'full'},
  {path: 'client', component: IndexclientComponent,
  children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'manager', component: ProductManagerComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
  ]
  },
  {path: 'admin', component: IndexAdminComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
