import { Component, OnInit } from "@angular/core";
import { UserService } from '../service/user.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



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
    selectedAccess: string;
    editingUsername: boolean;
    editingName: boolean;
    editingSurname: boolean;
    editingPassword: boolean;
    editAccess: boolean;

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
    onEditAccess() {
        this.editAccess = !this.editAccess
    }
    selectChanged() {
        let adminAccess = this.selectedAccess == 'Admin';
        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, adminAccess).subscribe(response => {
            console.log(response)
            this.userProfile.adminAccess = adminAccess
            this.editAccess = false;
        })

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
                this.userService.getUser(paramMap.get('id')).subscribe((user: any) => {
                    this.userProfile = user
                    this.username = user.username
                    this.surname = user.surname
                    this.name = user.name
                    this.selectedAccess = user.selectedAccess
                    this.userService.getConnectUser().subscribe((connectedUser: any) => {
                        this.ownProfile = connectedUser._id === user._id || connectedUser.adminAccess
                        this.connectedUser = connectedUser;
                        this.loading = false
                    })
                })
            }

        });


    }
}