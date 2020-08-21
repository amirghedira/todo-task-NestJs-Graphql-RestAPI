import { OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
export declare class AdminComponent implements OnInit {
    private userService;
    private router;
    constructor(userService: UserService, router: Router);
    ngOnInit(): void;
}
