import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Apollo } from 'apollo-angular';
export declare class TodoService {
    private http;
    private authService;
    private apollo;
    constructor(http: HttpClient, authService: AuthService, apollo: Apollo);
    getAssignedTodos(): import("rxjs").Observable<import("apollo-client").ApolloQueryResult<unknown>>;
    getUserTodo(): import("rxjs").Observable<import("apollo-client").ApolloQueryResult<unknown>>;
    addTodo(userid: string, title: string, description: string): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
    deleteTodo(todoId: string): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
    updateTodoState(todoId: string, state: boolean): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
    updateTodo(todoId: string, title: string, description: string): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
}
