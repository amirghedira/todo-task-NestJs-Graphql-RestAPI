import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
export declare class NavbarComponent implements OnInit {
    private router;
    private userService;
    private authService;
    status: boolean;
    user: any;
    loading: boolean;
    constructor(router: Router, userService: UserService, authService: AuthService);
    ngOnInit(): void;
    onDisconnect(): void;
}
