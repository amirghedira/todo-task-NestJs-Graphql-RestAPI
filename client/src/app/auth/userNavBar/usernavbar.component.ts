import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-usernav',
    templateUrl: './usernavbar.component.html',
    styleUrls: ['./usernavbar.component.css'],
})

export class UserNavBarComponent implements OnInit {

    user: any;
    loading: boolean;
    constructor() {

    }
    ngOnInit() {
    }
}