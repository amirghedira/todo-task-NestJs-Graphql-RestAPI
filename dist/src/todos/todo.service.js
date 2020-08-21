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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_service_1 = require("../users/user.service");
let TodoService = class TodoService {
    constructor(TodoModel, userService) {
        this.TodoModel = TodoModel;
        this.userService = userService;
        this.getAssignedTodos = async (userId) => {
            try {
                const todos = await this.TodoModel.find({ writerid: userId }).populate([{ path: 'userid' }, { path: 'writerid' }]).exec();
                return todos;
            }
            catch (error) {
                return new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
        this.getTodo = async (todoId) => {
            try {
                const todo = await this.TodoModel.find({ _id: todoId });
                return todo;
            }
            catch (error) {
                return new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
        this.getUserTodos = async (userId) => {
            try {
                const userTodos = await this.TodoModel.find({ userid: userId }).populate([{ path: 'userid' }, { path: 'writerid' }]).exec();
                return userTodos;
            }
            catch (error) {
                return new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
        this.addTodo = async (senderId, userid, title, desc) => {
            const userSender = await this.userService.getUser(senderId);
            if (userSender.adminAccess)
                try {
                    const newTodo = new this.TodoModel({
                        writerid: senderId,
                        userid: userid,
                        title: title,
                        description: desc,
                        date: new Date().toISOString()
                    });
                    const createdTodo = await newTodo.save();
                    const todo = await this.TodoModel.findById(createdTodo._id).populate([{ path: 'userid' }, { path: 'writerid' }]);
                    return todo;
                }
                catch (error) {
                    return new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            return new common_1.HttpException('permission denied', common_1.HttpStatus.FORBIDDEN);
        };
        this.deleteTodo = async (todoid, userid) => {
            try {
                const user = await this.userService.getUser(userid);
                const todo = await this.TodoModel.findById(todoid);
                if (todo)
                    if (user.adminAccess || user._id === todo.userid) {
                        await this.TodoModel.deleteOne({ _id: todoid });
                        return todo;
                    }
                    else
                        throw new common_1.HttpException('access denied', common_1.HttpStatus.FORBIDDEN);
                throw new common_1.HttpException('todo not found', common_1.HttpStatus.NOT_FOUND);
            }
            catch (error) {
                return new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
        this.editTodoState = async (todoId, todoState) => {
            try {
                const updatedTodo = await this.TodoModel.findByIdAndUpdate(todoId, { $set: { state: todoState } });
                return updatedTodo;
            }
            catch (error) {
                return new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
        this.editTodo = async (userid, todoId, title, description) => {
            try {
                const user = await this.userService.getUser(userid);
                const todo = await this.TodoModel.findById(todoId);
                if (todo)
                    if (user.adminAccess || user._id === todo.userid) {
                        todo.title = title;
                        todo.description = description;
                        const updatedTodo = await todo.save();
                        return updatedTodo;
                    }
                    else
                        throw new common_1.HttpException('access denied', common_1.HttpStatus.FORBIDDEN);
                throw new common_1.HttpException('todo not found', common_1.HttpStatus.NOT_FOUND);
            }
            catch (error) {
                return new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Todo')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, user_service_1.UserService])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map