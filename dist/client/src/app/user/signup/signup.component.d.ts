import { OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
export declare class SignUpComponent implements OnInit {
    private userService;
    constructor(userService: UserService);
    username: string;
    name: string;
    surname: string;
    password: string;
    repassword: string;
    ngOnInit(): void;
    registerUser(): void;
}
