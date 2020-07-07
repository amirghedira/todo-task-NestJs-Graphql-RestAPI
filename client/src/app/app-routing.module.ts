import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'user/login',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',

    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',

    },
];


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
