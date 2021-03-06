import { Component, OnInit } from "@angular/core";
import { ParamMap, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/service/user.service';



@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    userProfile: any;
    connectedUser: any;
    ownProfile: boolean;
    loading: boolean;
    username: string;
    surname: string;
    name: string;
    repassword: string;
    oldpassword: string;
    newpassword: string;
    editingUsername: boolean;
    editingName: boolean;
    editingSurname: boolean;
    editingPassword: boolean;

    constructor(private userService: UserService, private route: ActivatedRoute) {

        this.loading = true;
    }
    onEditUserName() {
        this.editingUsername = !this.editingUsername
    }
    onEditName() {
        this.editingName = !this.editingName
    }
    onEditSurname() {
        this.editingSurname = !this.editingSurname
    }

    onEditPassword() {
        this.editingPassword = !this.editingPassword
    }
    onSaveUsername() {
        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, this.userProfile.adminAccess).subscribe(response => {
            this.userProfile.username = this.username
            this.editingUsername = false
        })
    }
    onSavePassword() {

        if (this.repassword === this.newpassword)
            this.userService.updateUserPassword(this.userProfile._id, this.oldpassword, this.newpassword)
                .subscribe((response: any) => {

                    if (response.status)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.message
                        })
                    else
                        this.editingPassword = false;
                })
        else
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'passwords didnt match'
            })
    }
    onSaveName() {
        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, this.userProfile.adminAccess).subscribe(response => {
            this.userProfile.name = this.name
            this.editingName = false
        })
    }
    onSaveSurname() {

        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, this.userProfile.adminAccess).subscribe(response => {
            this.userProfile.surname = this.surname
            this.editingSurname = false
        })

    }
    ngOnInit() {

        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.has('id')) {
                this.userService.getUser(paramMap.get('id')).subscribe((response: any) => {
                    this.userProfile = response.data.getUser
                    this.username = this.userProfile.username
                    this.surname = this.userProfile.surname
                    this.name = this.userProfile.name
                    this.userService.getConnectUser().subscribe((response: any) => {
                        this.ownProfile = response.data.getUserWithToken._id === this.userProfile._id || response.data.getUserWithToken.adminAccess
                        this.connectedUser = response.data.getUserWithToken;
                        this.loading = false
                    })
                })
            }

        });


    }
}