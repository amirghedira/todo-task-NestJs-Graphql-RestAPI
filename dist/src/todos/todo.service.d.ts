import { HttpException } from "@nestjs/common";
import { Model } from 'mongoose';
import { UserService } from "src/users/user.service";
import { Todo } from "./types/todo";
export declare class TodoService {
    private TodoModel;
    private userService;
    constructor(TodoModel: Model<Todo>, userService: UserService);
    getTodos: () => Promise<any>;
    getTodo: (todoId: string) => Promise<any>;
    getUserTodos: (userId: string) => Promise<any>;
    addTodo: (senderId: any, userid: string, title: string, desc: string) => Promise<any>;
    deleteTodo: (todoid: string, userid: string) => Promise<HttpException | {
        message: string;
    }>;
    editTodoState: (todoId: string, todoState: boolean) => Promise<HttpException | {
        message: string;
    }>;
    editTodo: (userid: string, todoId: string, title: string, description: string) => Promise<HttpException | {
        message: string;
    }>;
}
