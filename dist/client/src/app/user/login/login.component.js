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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const todo_service_1 = require("../service/todo.service");
const user_service_1 = require("../service/user.service");
const auth_service_1 = require("../service/auth.service");
let LoginComponent = class LoginComponent {
    constructor(router, userService, todoService, authService) {
        this.router = router;
        this.userService = userService;
        this.todoService = todoService;
        this.authService = authService;
    }
    ngOnInit() {
        if (localStorage.getItem('token'))
            this.router.navigate(['/user/todos']);
    }
    onConnect() {
        this.userService.userLogin(this.username, this.password).subscribe(({ data, loading }) => {
            this.authService.setToken(data.login);
            this.userService.login(data.login);
            this.router.navigate(['/user/todos']);
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof todo_service_1.TodoService !== "undefined" && todo_service_1.TodoService) === "function" ? _b : Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _c : Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map