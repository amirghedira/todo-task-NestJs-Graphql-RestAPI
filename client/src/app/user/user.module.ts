import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { CommonModule } from '@angular/common';
import { NavBarModule } from '../navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'todos',
                component: TodoPageComponent
            },
            {
                path: 'profile/:id',
                component: ProfileComponent
            },
            {
                path: '',
                redirectTo: '/',
            },

        ]

    }

];

@NgModule({
    declarations: [
        UserComponent, ProfileComponent, TodoPageComponent
    ],
    imports: [
        RouterModule.forChild(userRoutes),
        CommonModule,
        NavBarModule,
        FormsModule
    ],
    providers: [TodoService, UserService, AuthService]
})
export class UserModule { }
