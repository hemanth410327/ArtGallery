import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { MydataComponent } from './pages/mydata/mydata.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenusharedpageComponent } from './sharepage/menusharedpage/menusharedpage.component';
import { AdditemComponent } from './pages/additem/additem.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'menu',component:MenusharedpageComponent,
    children:[
      {path: 'gallery', component:MenuComponent},
      {path: 'addArt', component:AdditemComponent},
      {path:'Mydata', component:MydataComponent},
      {path:'profile',component:ProfileComponent},
      {path:'edit',component:EditComponent}
    ]
  },
  {path:'menu/:id',component:MenupageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
