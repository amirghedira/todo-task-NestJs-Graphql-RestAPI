import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { UserService } from 'src/app/service/user.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})

export class SignUpComponent implements OnInit {

    constructor(private userService: UserService) { }
    username: string;
    name: string;
    surname: string;
    password: string;
    repassword: string;

    ngOnInit() {
    }

    registerUser() {

        this.userService.addUser(this.username, this.password, this.name, this.surname).subscribe((response: any) => {
            Swal.fire({
                icon: 'success',
                title: 'Your account is created',
                showConfirmButton: false,
            })
        }, error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        })

    }
}