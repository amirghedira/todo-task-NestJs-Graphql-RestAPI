import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { Apollo } from 'apollo-angular';
export declare class UserService {
    private http;
    private authService;
    private apollo;
    userCon: BehaviorSubject<any>;
    userConnected: import("rxjs").Observable<any>;
    constructor(http: HttpClient, authService: AuthService, apollo: Apollo);
    userLogin(username: string, password: string): import("rxjs").Observable<import("apollo-client").ApolloQueryResult<unknown>>;
    getUsers(): import("rxjs").Observable<import("apollo-client").ApolloQueryResult<unknown>>;
    getUser(userId: string): import("rxjs").Observable<import("apollo-client").ApolloQueryResult<unknown>>;
    getConnectUser(): import("rxjs").Observable<import("apollo-client").ApolloQueryResult<unknown>>;
    login(token: string): void;
    addUser(username: string, password: string, name: string, surname: string): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
    deleteUser(userId: string): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
    updateUser(userId: string, username: string, name: string, surname: string, access: boolean): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
    updateUserPassword(userId: string, oldPassword: string, newPassword: string): import("rxjs").Observable<import("apollo-link").FetchResult<unknown, Record<string, any>, Record<string, any>>>;
}
