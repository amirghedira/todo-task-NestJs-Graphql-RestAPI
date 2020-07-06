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
exports.NavbarComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const user_service_1 = require("../service/user.service");
const auth_service_1 = require("../service/auth.service");
let NavbarComponent = class NavbarComponent {
    constructor(router, userService, authService) {
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.status = false;
        this.loading = false;
        this.userService.userConnected.subscribe((token) => {
            if (token)
                this.userService.getConnectUser().subscribe((user) => {
                    if (user) {
                        this.status = true;
                        this.user = user;
                    }
                    else
                        this.status = false;
                });
        });
    }
    ngOnInit() {
        if (this.authService.getToken()) {
            this.userService.getConnectUser().subscribe((user) => {
                if (user) {
                    this.status = true;
                    this.user = user;
                }
                else
                    this.status = false;
                this.loading = true;
            });
        }
        else {
            this.loading = true;
        }
    }
    onDisconnect() {
        this.authService.eraseToken();
        this.status = false;
        this.router.navigate(['/login']);
    }
};
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-nav',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, auth_service_1.AuthService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map