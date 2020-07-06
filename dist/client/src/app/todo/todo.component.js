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
exports.TodoComponent = void 0;
const core_1 = require("@angular/core");
const user_service_1 = require("../service/user.service");
const todo_service_1 = require("../service/todo.service");
const router_1 = require("@angular/router");
const sweetalert2_1 = require("sweetalert2");
const auth_service_1 = require("../service/auth.service");
const moment = require("moment");
let TodoComponent = class TodoComponent {
    constructor(router, userService, todoService, authService) {
        this.router = router;
        this.userService = userService;
        this.todoService = todoService;
        this.authService = authService;
    }
    ngOnInit() {
        if (this.authService.getToken()) {
            this.userService.getConnectUser().subscribe((user) => {
                this.connectedUser = user;
                if (user.adminAccess) {
                    this.userService.getUsers().subscribe((users) => {
                        this.users = users.filter(usr => { return usr._id != user._id; });
                    });
                    this.todoService.getTodos().subscribe((todos) => {
                        todos.reverse();
                        this.todos = todos;
                    });
                }
                else {
                    this.users = [];
                    this.todoService.getUserTodo().subscribe((todos) => {
                        todos.reverse();
                        this.todos = todos;
                    });
                }
            });
        }
        else
            this.router.navigate(['/login']);
    }
    onPost() {
        const userIndex = this.users.findIndex(user => user.username === this.selectedUser);
        const assignedUserId = this.users[userIndex]._id;
        if (this.title != '' && this.description != '')
            this.todoService.addTodo(assignedUserId, this.title, this.description).subscribe((response) => {
                this.todos.unshift(response);
                this.title = '';
                this.description = '';
            });
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
TodoComponent = __decorate([
    core_1.Component({
        templateUrl: './todo.component.html',
        styleUrls: ['./todo.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, todo_service_1.TodoService, auth_service_1.AuthService])
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map