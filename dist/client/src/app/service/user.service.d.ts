import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
export declare class UserService {
    private http;
    private authService;
    private userCon;
    userConnected: import("rxjs").Observable<any>;
    constructor(http: HttpClient, authService: AuthService);
    userLogin(username: string, password: string): import("rxjs").Observable<Object>;
    getUsers(): import("rxjs").Observable<Object>;
    getUser(userId: string): import("rxjs").Observable<Object>;
    getConnectUser(): import("rxjs").Observable<Object>;
    login(user: any): void;
    addUser(username: string, password: string, name: string, surname: string): import("rxjs").Observable<Object>;
    deleteUser(userId: string): import("rxjs").Observable<Object>;
    updateUser(userId: string, username: string, name: string, surname: string, access: boolean): import("rxjs").Observable<Object>;
    updateUserPassword(userId: string, oldPassword: string, newPassword: string): import("rxjs").Observable<Object>;
}
