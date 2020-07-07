import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [

            {
                path: 'profile/:id',
                component: ProfileComponent
            },
            {
                path: 'todos',
                component: TodoPageComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                redirectTo: '/todos',
            },

        ]

    }

];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
