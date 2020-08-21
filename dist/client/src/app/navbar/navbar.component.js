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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const user_service_1 = require("src/app/service/user.service");
const auth_service_1 = require("src/app/service/auth.service");
let NavbarComponent = class NavbarComponent {
    constructor(router, userService, authService) {
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.loading = true;
    }
    ngOnInit() {
        this.userService.getConnectUser().subscribe((response) => {
            this.user = response.data.getUserWithToken;
            this.loading = false;
        });
    }
    onDisconnect() {
        this.authService.eraseToken();
        this.router.navigate(['/auth/login']);
    }
};
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-nav',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map