import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageProfileComponent } from './manage-profiles/manage-profiles.component';
import { ManageTodoComponent } from './managetodo/managetodo.component';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { NavBarModule } from '../navbar/navbar.module';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'manage-todo',
                component: ManageTodoComponent
            },
            {
                path: 'manage-profile/:id',
                component: ManageProfileComponent
            },
            {
                path: '**',
                redirectTo: 'manage-todo',
            },
        ]

    }
];

@NgModule({
    declarations: [
        AdminComponent, ManageTodoComponent, ManageProfileComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(adminRoutes),
        NavBarModule
    ],
    providers: [TodoService, UserService, AuthService]
})
export class AdminModule { }
