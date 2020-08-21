import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserNavBarModule } from './userNavBar/usernavbar.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [

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
                redirectTo: '/auth/login',
            },

        ]

    }

];

@NgModule({
    declarations: [AuthComponent, SignUpComponent, LoginComponent],
    imports: [
        RouterModule.forChild(authRoutes),
        UserNavBarModule,
        CommonModule,
        FormsModule
    ],
    exports: [RouterModule]
})
export class AuthModule { }
