import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatesComponent } from './rates/rates.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'rates', component: RatesComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
