import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtgalarydataService } from './services/artgalarydata.service';
import { MenusharedpageComponent } from './sharepage/menusharedpage/menusharedpage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MydataComponent } from './pages/mydata/mydata.component';
import { EditComponent } from './pages/edit/edit.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdditemComponent } from './pages/additem/additem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    MenupageComponent,
    MenusharedpageComponent,
    LoginComponent,
    RegisterComponent,
    MydataComponent,
    EditComponent,
    ProfileComponent,
    AdditemComponent
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
