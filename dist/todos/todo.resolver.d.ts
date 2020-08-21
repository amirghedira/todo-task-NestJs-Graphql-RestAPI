import { TodoService } from "./todo.service";
import { User } from "src/users/types/user";
import { AddTodoInput, UpdateTodoInput } from "./types/todo.input";
export declare class TodoResolver {
    private todoService;
    constructor(todoService: TodoService);
    getUserTodos(user: User): Promise<any>;
    userTodos(user: User): Promise<any>;
    getAssignedTodos(user: User): Promise<any>;
    getTodo(todoId: string): Promise<any>;
    addTodo(addTodoInput: AddTodoInput, user: User): Promise<any>;
    deleteTodo(todoId: string, user: User): Promise<any>;
    updateState(todoId: string, state: boolean): Promise<any>;
    updateTodo(updateTodoInput: UpdateTodoInput, user: User): Promise<any>;
}
