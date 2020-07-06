import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

    status: boolean;
    user: any;
    loading: boolean;
    constructor(private router: Router, private userService: UserService, private authService: AuthService) {
        this.status = false;
        this.loading = false;
        this.userService.userConnected.subscribe((token) => {
            if (token)
                this.userService.getConnectUser().subscribe((user: any) => {
                    if (user) {
                        this.status = true
                        this.user = user
                    }
                    else
                        this.status = false

                })

        });

    }
    ngOnInit() {
        if (this.authService.getToken()) {

            this.userService.getConnectUser().subscribe((user: any) => {
                if (user) {
                    this.status = true
                    this.user = user
                }
                else
                    this.status = false

                this.loading = true;


            })
        } else {
            this.loading = true;
        }



    }
    onDisconnect() {
        this.authService.eraseToken();
        this.status = false;
        this.router.navigate(['/login'])
    }

}