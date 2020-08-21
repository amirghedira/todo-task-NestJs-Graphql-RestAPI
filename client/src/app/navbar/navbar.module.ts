import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],

    imports: [


        RouterModule,
        FormsModule,
        CommonModule,

    ],
    exports: [NavbarComponent]
})
export class NavBarModule { }