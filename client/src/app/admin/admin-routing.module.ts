import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageTodoComponent } from './managetodo/managetodo.component';
import { ManageProfileComponent } from './manage-profiles/manage-profiles.component';


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
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
