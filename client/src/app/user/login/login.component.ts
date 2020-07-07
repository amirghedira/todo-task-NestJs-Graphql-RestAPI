import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UserService } from 'src/app/service/user.service';
import { TodoService } from 'src/app/service/todo.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

    username: string;
    password: string;
    constructor(private router: Router, private userService: UserService, private authService: AuthService) { }
    ngOnInit() {
        if (localStorage.getItem('token'))
            this.router.navigate(['/user/todos'])
    }
    onConnect() {
        this.userService.userLogin(this.username, this.password).subscribe((response: any) => {

            this.userService.login(response.access_token)
            this.authService.setToken(response.access_token)
            this.router.navigate(['/user/todos']);
        }
            , (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid username or password'
                })
            })


    }
}