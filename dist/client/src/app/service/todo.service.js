"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const auth_service_1 = require("./auth.service");
const graphql_tag_1 = require("graphql-tag");
const apollo_angular_1 = require("apollo-angular");
let TodoService = class TodoService {
    constructor(http, authService, apollo) {
        this.http = http;
        this.authService = authService;
        this.apollo = apollo;
    }
    getAssignedTodos() {
        return this.apollo.query({
            query: graphql_tag_1.default `
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
        });
    }
    getUserTodo() {
        return this.apollo.query({
            query: graphql_tag_1.default `
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
        });
    }
    addTodo(userid, title, description) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `mutation{
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
        });
    }
    deleteTodo(todoId) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `mutation{
               deleteTodo(todoId:"${todoId}"){  
                   _id
               }
           }`
        });
    }
    updateTodoState(todoId, state) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `mutation{
                updateState(todoId:"${todoId}",state:${state}){
                    _id
                }
            }`
        });
    }
    updateTodo(todoId, title, description) {
        return this.apollo.mutate({
            mutation: graphql_tag_1.default `mutation{
                updateTodo(updateTodoInput:{title:"${title}",description:"${description}",todoId:"${todoId}"}){
                    _id
                }
            }`
        });
    }
};
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService, apollo_angular_1.Apollo])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map