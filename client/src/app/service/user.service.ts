import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Injectable()

export class UserService {

    userCon = new BehaviorSubject(null);
    userConnected = this.userCon.asObservable();

    constructor(private http: HttpClient, private authService: AuthService, private apollo: Apollo) {
    }

    // userLogin(username: string, password: string) {

    //     const loginQuery = gql`
    //     query{
    //         login(loginInput:{
    //           username:"${username}"
    //           password:"${password}"
    //         })
    //       }
    //       `;

    //     return this.apollo.watchQuery<any>({
    //         query: loginQuery
    //     }).valueChanges

    // }
    userLogin(username: string, password: string) {

        return this.http.post('http://localhost:3000/user/login', { username, password })

    }
    getUsers() {

        return this.http.get('http://localhost:3000/user')
    }
    getUser(userId: string) {

        return this.http.get('http://localhost:3000/user/' + userId)
    }
    getConnectUser() {

        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('http://localhost:3000/user/token', { headers: headers })
    }
    login(token: string) {
        console.log('hh')
        return this.userCon.next(token);
    }
    addUser(username: string, password: string, name: string, surname: string) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());

        return this.http.post('http://localhost:3000/user', { username, password, name, surname }, { headers: headers })
    }
    deleteUser(userId: string) {

        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.delete('http://localhost:3000/user/' + userId, { headers: headers })
    }
    updateUser(userId: string, username: string, name: string, surname: string, access: boolean) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());

        return this.http.patch('http://localhost:3000/user/' + userId, { username, surname, name, access }, { headers: headers })
    }
    updateUserPassword(userId: string, oldPassword: string, newPassword: string) {

        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.patch('http://localhost:3000/user/password/' + userId, { newPassword, oldPassword }, { headers: headers })

    }
}