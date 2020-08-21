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
exports.TodoPageComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const sweetalert2_1 = require("sweetalert2");
const moment = require("moment");
const user_service_1 = require("src/app/service/user.service");
const todo_service_1 = require("src/app/service/todo.service");
const auth_service_1 = require("src/app/service/auth.service");
let TodoPageComponent = class TodoPageComponent {
    constructor(router, userService, todoService, authService) {
        this.router = router;
        this.userService = userService;
        this.todoService = todoService;
        this.authService = authService;
    }
    ngOnInit() {
        this.userService.getConnectUser().subscribe((response) => {
            console.log(response.data.getUserWithToken);
            this.connectedUser = response.data.getUserWithToken;
            this.todoService.getUserTodo().subscribe((response) => {
                response.data.getUserTodos.reverse();
                this.todos = response.data.getUserTodos;
            });
        });
    }
    checkEmpty() {
        return this.todos.length === 0;
    }
    transformDate(date) {
        return moment(date).fromNow();
    }
    checkAdminAccess() {
        return this.connectedUser.adminAccess;
    }
    onClickEditTodo(todoid) {
        this.toEditId = todoid;
    }
    onEditTodo() {
        this.todoService.updateTodo(this.toEditId, this.editTitle, this.editDescription).subscribe(response => {
            const index = this.todos.findIndex(todo => { return todo._id === this.toEditId; });
            this.todos[index].title = this.editTitle;
            this.todos[index].description = this.editDescription;
        });
    }
    oneditTodoState(todoId, todoState) {
        this.todoService.updateTodoState(todoId, todoState).subscribe(response => {
            const todoIndex = this.todos.findIndex(todo => todo._id === todoId);
            this.todos[todoIndex].state = todoState;
        });
    }
    onDeleteTodo(todoid) {
        this.todoService.deleteTodo(todoid).subscribe(response => {
            this.todos = this.todos.filter(todo => { return todo._id !== todoid; });
        });
    }
    onDeleteUser(userid) {
        this.userService.deleteUser(userid).subscribe(response => {
        }, error => {
            sweetalert2_1.default.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'you dont have the access'
            });
        });
    }
};
TodoPageComponent = __decorate([
    core_1.Component({
        templateUrl: './todo-page.component.html',
        styleUrls: ['./todo-page.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof todo_service_1.TodoService !== "undefined" && todo_service_1.TodoService) === "function" ? _b : Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _c : Object])
], TodoPageComponent);
exports.TodoPageComponent = TodoPageComponent;
//# sourceMappingURL=todo-page.component.js.map