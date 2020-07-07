import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
    declarations: [
        UserComponent, ProfileComponent, SignUpComponent, LoginComponent, TodoPageComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule
    ],
    providers: [TodoService, UserService, AuthService]
})
export class UserModule { }
