import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { connected } from 'process';
import { Router } from '@angular/router';
import { connect } from 'net';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) { }


    ngOnInit() {
        this.userService.getConnectUser().subscribe((response: any) => {
            if (response.data.getUserWithToken == null || !response.data.getUserWithToken.adminAccess)
                this.router.navigate(['/user/todos'])
        })
    }
}
