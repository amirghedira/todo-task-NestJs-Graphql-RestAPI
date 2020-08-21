import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


@Injectable()

export class TodoService {


    constructor(private http: HttpClient, private authService: AuthService, private apollo: Apollo) { }
    getAssignedTodos() {

        return this.apollo.query(
            {
                query: gql`
                query{
                    getAssignedTodos{
                      _id
                      description
                      writerid{
                          name
                          surname
                          username
                      }
                      date
                      state
                      title
                      userid{
                        _id
                        name
                          surname
                          username
                      }
                  }
                }
             `,
                fetchPolicy: 'network-only'
            }
        )
    }
    getUserTodo() {

        return this.apollo.query(
            {
                query: gql`
                query{
                    getUserTodos{
                      _id
                      description
                      writerid{
                          username
                      }
                      date
                      state
                      title
                      userid{
                          username
                      }
                  }
                }
             `,
                fetchPolicy: 'network-only'
            }
        )
    }
    addTodo(userid: string, title: string, description: string) {

        return this.apollo.mutate({
            mutation: gql`mutation{
               addTodo(addTodoInput:{title:"${title}",description:"${description}",userId:"${userid}"}){
                _id
                userid{
                    username
                    surname
                    name
                }
                writerid{
                    username
                    name
                    surname
                }
                title
                description
                
            }
           }`
        })
    }
    deleteTodo(todoId: string) {

        return this.apollo.mutate({
            mutation: gql`mutation{
               deleteTodo(todoId:"${todoId}"){  
                   _id
               }
           }`
        })
    }
    updateTodoState(todoId: string, state: boolean) {
        return this.apollo.mutate({
            mutation: gql`mutation{
                updateState(todoId:"${todoId}",state:${state}){
                    _id
                }
            }`
        })

    }
    updateTodo(todoId: string, title: string, description: string) {

        return this.apollo.mutate({
            mutation: gql`mutation{
                updateTodo(updateTodoInput:{title:"${title}",description:"${description}",todoId:"${todoId}"}){
                    _id
                }
            }`
        })
    }


}