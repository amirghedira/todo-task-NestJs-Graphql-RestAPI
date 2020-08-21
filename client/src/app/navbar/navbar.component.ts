import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

    user: any;
    loading: boolean;
    constructor(private router: Router, public userService: UserService, public authService: AuthService) {
        this.loading = true;
    }
    ngOnInit() {

        this.userService.getConnectUser().subscribe((response: any) => {

            this.user = response.data.getUserWithToken

            this.loading = false;


        })

    }
    onDisconnect() {
        this.authService.eraseToken();
        this.router.navigate(['/auth/login'])
    }

}