import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FoodComponent } from './food/food.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { foodService } from '../../food.service';
import { canActiveGuard } from './can-active.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'home', component: HomeComponent
}, {
  path: 'food', component: FoodComponent
},{
  path:'login',component:LoginComponent
},
{
  path: 'fooddetails/:foodID', component: FooddetailsComponent,canActivate :[canActiveGuard]
},
{
  path: 'aboutus', component: AboutusComponent
},
{
  path: 'contactus', component: ContactusComponent
}, {
  // path:'notfound',component:NotfoundComponent  // here we have o observe one thing we have wrigh one worng path we will get error 
  path: '**', component: NotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
