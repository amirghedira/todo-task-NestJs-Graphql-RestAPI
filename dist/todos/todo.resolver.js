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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const todo_service_1 = require("./todo.service");
const todo_type_1 = require("./types/todo.type");
const common_1 = require("@nestjs/common");
const gql_auth_gard_1 = require("../auth/gql-auth.gard");
const currentuser_decorator_1 = require("../auth/currentuser.decorator");
const user_1 = require("../users/types/user");
const todo_input_1 = require("./types/todo.input");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getTodos() {
        return this.todoService.getTodos();
    }
    userTodos(user) {
        console.log(user);
        return this.todoService.getUserTodos(user._id);
    }
    getTodo(todoId) {
        return this.todoService.getTodo(todoId);
    }
    addTodo(addTodoInput, user) {
        const { userId, title, description } = addTodoInput;
        return this.todoService.addTodo(user._id, userId, title, description);
    }
    deleteTodo(todoId, user) {
        return this.todoService.deleteTodo(todoId, user._id);
    }
    updateState(todoId, state) {
        return this.todoService.editTodoState(todoId, state);
    }
    updateTodo(updateTodoInput, user) {
        const { todoId, title, description } = updateTodoInput;
        return this.todoService.editTodo(user._id, todoId, title, description);
    }
};
__decorate([
    graphql_1.Query(() => [todo_type_1.TodoType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodos", null);
__decorate([
    common_1.UseGuards(gql_auth_gard_1.GqlAuthGuard),
    graphql_1.Query(() => [todo_type_1.TodoType]),
    __param(0, currentuser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "userTodos", null);
__decorate([
    graphql_1.Query(() => todo_type_1.TodoType),
    __param(0, graphql_1.Args('todoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "getTodo", null);
__decorate([
    common_1.UseGuards(gql_auth_gard_1.GqlAuthGuard),
    graphql_1.Query(() => [todo_type_1.TodoType]),
    __param(0, graphql_1.Args('addTodoInput')), __param(1, currentuser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_input_1.AddTodoInput, Object]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "addTodo", null);
__decorate([
    common_1.UseGuards(gql_auth_gard_1.GqlAuthGuard),
    graphql_1.Mutation(() => todo_type_1.TodoType),
    __param(0, graphql_1.Args('todoId')), __param(1, currentuser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "deleteTodo", null);
__decorate([
    common_1.UseGuards(gql_auth_gard_1.GqlAuthGuard),
    graphql_1.Mutation(() => todo_type_1.TodoType),
    __param(0, graphql_1.Args('todoId')), __param(1, graphql_1.Args('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "updateState", null);
__decorate([
    common_1.UseGuards(gql_auth_gard_1.GqlAuthGuard),
    graphql_1.Mutation(() => todo_type_1.TodoType),
    __param(0, graphql_1.Args('updateTodoInput')), __param(1, currentuser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_input_1.UpdateTodoInput, Object]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "updateTodo", null);
TodoResolver = __decorate([
    graphql_1.Resolver('Todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
exports.TodoResolver = TodoResolver;
//# sourceMappingURL=todo.resolver.js.map