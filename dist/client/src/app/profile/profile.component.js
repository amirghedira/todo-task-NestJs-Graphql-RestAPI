"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileComponent = void 0;
const core_1 = require("@angular/core");
const user_service_1 = require("../service/user.service");
const router_1 = require("@angular/router");
const sweetalert2_1 = require("sweetalert2");
let ProfileComponent = class ProfileComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.loading = true;
    }
    onEditUserName() {
        this.editingUsername = !this.editingUsername;
    }
    onEditName() {
        this.editingName = !this.editingName;
    }
    onEditSurname() {
        this.editingSurname = !this.editingSurname;
    }
    onEditAccess() {
        this.editAccess = !this.editAccess;
    }
    selectChanged() {
        let adminAccess = this.selectedAccess == 'Admin';
        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, adminAccess).subscribe(response => {
            console.log(response);
            this.userProfile.adminAccess = adminAccess;
            this.editAccess = false;
        });
    }
    onEditPassword() {
        this.editingPassword = !this.editingPassword;
    }
    onSaveUsername() {
        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, this.userProfile.adminAccess).subscribe(response => {
            this.userProfile.username = this.username;
            this.editingUsername = false;
        });
    }
    onSavePassword() {
        if (this.repassword === this.newpassword)
            this.userService.updateUserPassword(this.userProfile._id, this.oldpassword, this.newpassword)
                .subscribe((response) => {
                if (response.status)
                    sweetalert2_1.default.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: response.message
                    });
                else
                    this.editingPassword = false;
            });
        else
            sweetalert2_1.default.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'passwords didnt match'
            });
    }
    onSaveName() {
        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, this.userProfile.adminAccess).subscribe(response => {
            this.userProfile.name = this.name;
            this.editingName = false;
        });
    }
    onSaveSurname() {
        this.userService.updateUser(this.userProfile._id, this.username, this.name, this.surname, this.userProfile.adminAccess).subscribe(response => {
            this.userProfile.surname = this.surname;
            this.editingSurname = false;
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('id')) {
                this.userService.getUser(paramMap.get('id')).subscribe((user) => {
                    this.userProfile = user;
                    this.username = user.username;
                    this.surname = user.surname;
                    this.name = user.name;
                    this.selectedAccess = user.selectedAccess;
                    this.userService.getConnectUser().subscribe((connectedUser) => {
                        this.ownProfile = connectedUser._id === user._id || connectedUser.adminAccess;
                        this.connectedUser = connectedUser;
                        this.loading = false;
                    });
                });
            }
        });
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map