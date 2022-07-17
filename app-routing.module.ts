import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './sign-in/sign-in.component';
import { HcontainerComponent } from './hcontainer/hcontainer.component';
import { Product1Component } from './product1/product1.component';
import { Product3Component } from './product3/product3.component';
import { Product2Component } from './product2/product2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HcontainerComponent,},
  {path:'home/:p1',component:Product1Component,canActivate:[AuthGuard]},
  {path:'home/:p2',component:Product2Component,
  canActivate:[AuthGuard]
},
  {path:'home/:p3',component:Product3Component,canActivate:[AuthGuard]},
 
  {path:'signin', component:SigninComponent},
  {path:'signin/:signup', component:SignUpComponent},
  {path:'cart', component:CartComponent},
  
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





exports: [RouterModule]
})
export class AppRoutingModule { }
