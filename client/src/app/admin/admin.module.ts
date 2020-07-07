import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageProfileComponent } from './manage-profiles/manage-profiles.component';
import { ManageTodoComponent } from './managetodo/managetodo.component';
import { AdminComponent } from './admin.component';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AdminComponent, ManageProfileComponent, ManageTodoComponent
    ],
    imports: [
        AdminRoutingModule,
        FormsModule,
        CommonModule,
        FormsModule
    ],
    providers: [TodoService, UserService, AuthService]
})
export class AdminModule { }
