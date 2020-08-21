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
const apollo_angular_1 = require("apollo-angular");
const graphql_tag_1 = require("graphql-tag");
let UserService = class UserService {
    constructor(http, authService, apollo) {
        this.http = http;
        this.authService = authService;
        this.apollo = apollo;
        this.userCon = new rxjs_1.BehaviorSubject(null);
        this.userConnected = this.userCon.asObservable();
    }
    userLogin(username, password) {
        return this.apollo.query({
            query: graphql_tag_1.default `
            query{
                login(loginInput:{
                  username:"${username}",
                  password:"${password}"
                }){
                    user{
                        username
                        _id
                    }
                    token   
                }
              }
              `,
            fetchPolicy: 'network-only'
        });
    }
    getUsers() {
        return this.apollo.query({
            query: graphql_tag_1.default `
            query{
                getUsers{
                    _id
                    username
                    name
                    surname
                    adminAccess
                }
            }
              `,
            fetchPolicy: 'network-only'
        });
    }
    getUser(userId) {
        return this.apollo.query({
            query: graphql_tag_1.default `query{
                getUser(userid:"${userId}"){
                    username
                    name
                    _id
                    surname
                    adminAccess
                }
            }`,
            fetchPolicy: 'network-only'
        });
    }
    getConnectUser() {
        return this.apollo.query({
            query: graphql_tag_1.default `
            query{
                getUserWithToken{
                    username
                    _id
                    name
                    surname
                    adminAccess
                }
              }
              `,
            fetchPolicy: 'no-cache'
        });
    }
    login(token) {
        return this.userCon.next(token);
    }
    addUser(username, password, name, surname) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `
                mutation{
                    addUser(UserInput:{username:"${username}", name:"${name}",surname:"${surname}",password:"${password}"}){_id}
                }
              `
        });
    }
    deleteUser(userId) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `mutation{
                deleteUser(userid:"${userId}"){
                    username
                    name
                    _id
                    surname
                    adminAccess
                }
            }`
        });
    }
    updateUser(userId, username, name, surname, access) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `mutation{
                updateUser(UpdateUserInput:{userId:"${userId}",username:"${username}",name:"${name}",surname:"${surname}",access:"${access}"}){
                    _id
                    username
                }
            }`
        });
    }
    updateUserPassword(userId, oldPassword, newPassword) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `mutation{
                 updateUserPassword(UpdatePasswordInput:{userId:"${userId}" ,oldPassword:"${oldPassword}",newPassword:"${newPassword}"}){
                    _id
                    username
                }
            }`
        });
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService, apollo_angular_1.Apollo])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map