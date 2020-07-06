import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable()

export class TodoService {


    constructor(private http: HttpClient, private authService: AuthService) { }
    getTodos() {

        return this.http.get('http://localhost:3000/todo')
    }
    getUserTodo() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('http://localhost:3000/todo/user', { headers: headers })
    }
    addTodo(userid: string, title: string, description: string) {

        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.post('http://localhost:3000/todo', { userid, title, description }, { headers: headers })
    }
    deleteTodo(todoId: string) {

        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.delete('http://localhost:3000/todo/' + todoId, { headers: headers })
    }
    updateTodoState(todoId: string, state: boolean) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.patch('http://localhost:3000/todo/state/' + todoId, { state }, { headers: headers })

    }
    updateTodo(todoId: string, title: string, description: string) {

        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.patch('http://localhost:3000/todo/' + todoId, { title, description }, { headers: headers })
    }


}