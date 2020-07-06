import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
export declare class TodoService {
    private http;
    private authService;
    constructor(http: HttpClient, authService: AuthService);
    getTodos(): import("rxjs").Observable<Object>;
    getUserTodo(): import("rxjs").Observable<Object>;
    addTodo(userid: string, title: string, description: string): import("rxjs").Observable<Object>;
    deleteTodo(todoId: string): import("rxjs").Observable<Object>;
    updateTodoState(todoId: string, state: boolean): import("rxjs").Observable<Object>;
    updateTodo(todoId: string, title: string, description: string): import("rxjs").Observable<Object>;
}
