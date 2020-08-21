import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
export declare class NavbarComponent implements OnInit {
    private router;
    userService: UserService;
    authService: AuthService;
    user: any;
    loading: boolean;
    constructor(router: Router, userService: UserService, authService: AuthService);
    ngOnInit(): void;
    onDisconnect(): void;
}
