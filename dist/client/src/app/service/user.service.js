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
exports.UserService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const auth_service_1 = require("./auth.service");
let UserService = class UserService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userCon = new rxjs_1.BehaviorSubject(null);
        this.userConnected = this.userCon.asObservable();
    }
    userLogin(username, password) {
        return this.http.post('http://localhost:3000/user/login', { username, password });
    }
    getUsers() {
        return this.http.get('http://localhost:3000/user');
    }
    getUser(userId) {
        return this.http.get('http://localhost:3000/user/' + userId);
    }
    getConnectUser() {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('http://localhost:3000/user/token', { headers: headers });
    }
    login(user) {
        this.userCon.next(user);
    }
    addUser(username, password, name, surname) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.post('http://localhost:3000/user', { username, password, name, surname }, { headers: headers });
    }
    deleteUser(userId) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.delete('http://localhost:3000/user/' + userId, { headers: headers });
    }
    updateUser(userId, username, name, surname, access) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.patch('http://localhost:3000/user/' + userId, { username, surname, name, access }, { headers: headers });
    }
    updateUserPassword(userId, oldPassword, newPassword) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.patch('http://localhost:3000/user/password/' + userId, { newPassword, oldPassword }, { headers: headers });
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map