import { Model } from 'mongoose';
import { UserService } from "src/users/user.service";
import { Todo } from "./types/todo";
export declare class TodoService {
    private TodoModel;
    private userService;
    constructor(TodoModel: Model<Todo>, userService: UserService);
    getAssignedTodos: (userId: string) => Promise<any>;
    getTodo: (todoId: string) => Promise<any>;
    getUserTodos: (userId: string) => Promise<any>;
    addTodo: (senderId: any, userid: string, title: string, desc: string) => Promise<any>;
    deleteTodo: (todoid: string, userid: string) => Promise<any>;
    editTodoState: (todoId: string, todoState: boolean) => Promise<any>;
    editTodo: (userid: string, todoId: string, title: string, description: string) => Promise<any>;
}
