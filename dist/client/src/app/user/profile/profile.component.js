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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const sweetalert2_1 = require("sweetalert2");
const user_service_1 = require("src/app/service/user.service");
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
                this.userService.getUser(paramMap.get('id')).subscribe((response) => {
                    this.userProfile = response.data.getUser;
                    this.username = this.userProfile.username;
                    this.surname = this.userProfile.surname;
                    this.name = this.userProfile.name;
                    this.userService.getConnectUser().subscribe((response) => {
                        this.ownProfile = response.data.getUserWithToken._id === this.userProfile._id || response.data.getUserWithToken.adminAccess;
                        this.connectedUser = response.data.getUserWithToken;
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
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, router_1.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map