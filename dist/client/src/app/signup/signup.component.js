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
exports.SignUpComponent = void 0;
const core_1 = require("@angular/core");
const sweetalert2_1 = require("sweetalert2");
const user_service_1 = require("../service/user.service");
let SignUpComponent = class SignUpComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
    registerUser() {
        this.userService.addUser(this.username, this.password, this.name, this.surname).subscribe((response) => {
            sweetalert2_1.default.fire({
                icon: 'success',
                title: 'Your account is created',
                showConfirmButton: false,
            });
        }, error => {
            sweetalert2_1.default.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        });
    }
};
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map