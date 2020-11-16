import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityPageComponent } from './city-page/city-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
{ path: '', component: HomePageComponent },
{ path: 'city/:name', component: CityPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
