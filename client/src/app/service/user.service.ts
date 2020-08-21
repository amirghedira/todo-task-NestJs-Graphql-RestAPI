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

    userLogin(username: string, password: string) {
        return this.apollo.query({
            query: gql`
            query{
                login(loginInput:{
                  username:"${username}",
                  password:"${password}"
                }){
                    user{
                        username
                        _id
                    }
                    token   
                }
              }
              `,
            fetchPolicy: 'network-only'
        })

    }
    getUsers() {

        return this.apollo.query({
            query: gql`
            query{
                getUsers{
                    _id
                    username
                    name
                    surname
                    adminAccess
                }
            }
              `,
            fetchPolicy: 'network-only'
        })
    }
    getUser(userId: string) {

        return this.apollo.query({
            query: gql`query{
                getUser(userid:"${userId}"){
                    username
                    name
                    _id
                    surname
                    adminAccess
                }
            }`,
            fetchPolicy: 'network-only'

        })
    }
    getConnectUser() {

        return this.apollo.query({
            query: gql`
            query{
                getUserWithToken{
                    username
                    _id
                    name
                    surname
                    adminAccess
                }
              }
              `,
            fetchPolicy: 'no-cache'

        })
    }
    login(token: string) {
        return this.userCon.next(token);
    }
    addUser(username: string, password: string, name: string, surname: string) {
        return this.apollo.mutate({
            mutation: gql`
                mutation{
                    addUser(UserInput:{username:"${username}", name:"${name}",surname:"${surname}",password:"${password}"}){_id}
                }
              `
        })
    }
    deleteUser(userId: string) {

        return this.apollo.mutate({
            mutation: gql`mutation{
                deleteUser(userid:"${userId}"){
                    username
                    name
                    _id
                    surname
                    adminAccess
                }
            }`
        })
    }
    updateUser(userId: string, username: string, name: string, surname: string, access: boolean) {
        return this.apollo.mutate({
            mutation: gql`mutation{
                updateUser(UpdateUserInput:{userId:"${userId}",username:"${username}",name:"${name}",surname:"${surname}",access:"${access}"}){
                    _id
                    username
                }
            }`
        })
    }
    updateUserPassword(userId: string, oldPassword: string, newPassword: string) {

        return this.apollo.mutate({
            mutation: gql`mutation{
                 updateUserPassword(UpdatePasswordInput:{userId:"${userId}" ,oldPassword:"${oldPassword}",newPassword:"${newPassword}"}){
                    _id
                    username
                }
            }`
        })
    }
}