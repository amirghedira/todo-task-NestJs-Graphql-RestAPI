import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AppComponent, SignUpComponent, LoginComponent, NavbarComponent, TodoComponent, ProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [TodoService, UserService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
