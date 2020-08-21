import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
export declare class LoginComponent implements OnInit {
    private router;
    private userService;
    private authService;
    username: string;
    password: string;
    constructor(router: Router, userService: UserService, authService: AuthService);
    ngOnInit(): void;
    onConnect(): void;
}
