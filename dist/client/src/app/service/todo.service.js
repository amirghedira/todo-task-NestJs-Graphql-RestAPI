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
exports.TodoService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const auth_service_1 = require("./auth.service");
let TodoService = class TodoService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getTodos() {
        return this.http.get('http://localhost:3000/todo');
    }
    getUserTodo() {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('http://localhost:3000/todo/user', { headers: headers });
    }
    addTodo(userid, title, description) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.post('http://localhost:3000/todo', { userid, title, description }, { headers: headers });
    }
    deleteTodo(todoId) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.delete('http://localhost:3000/todo/' + todoId, { headers: headers });
    }
    updateTodoState(todoId, state) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.patch('http://localhost:3000/todo/state/' + todoId, { state }, { headers: headers });
    }
    updateTodo(todoId, title, description) {
        const headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.patch('http://localhost:3000/todo/' + todoId, { title, description }, { headers: headers });
    }
};
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map