import { OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
export declare class ProfileComponent implements OnInit {
    private userService;
    private route;
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
    constructor(userService: UserService, route: ActivatedRoute);
    onEditUserName(): void;
    onEditName(): void;
    onEditSurname(): void;
    onEditPassword(): void;
    onSaveUsername(): void;
    onSavePassword(): void;
    onSaveName(): void;
    onSaveSurname(): void;
    ngOnInit(): void;
}