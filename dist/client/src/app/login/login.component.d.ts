import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
export declare class LoginComponent implements OnInit {
    private router;
    private userService;
    private todoService;
    private authService;
    username: string;
    password: string;
    constructor(router: Router, userService: UserService, todoService: TodoService, authService: AuthService);
    ngOnInit(): void;
    onConnect(): void;
}
