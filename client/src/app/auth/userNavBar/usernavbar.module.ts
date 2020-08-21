import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserNavBarComponent } from './usernavbar.component';

@NgModule({
    declarations: [
        UserNavBarComponent
    ],

    imports: [


        RouterModule,
        FormsModule,
        CommonModule,

    ],
    exports: [UserNavBarComponent]
})
export class UserNavBarModule { }