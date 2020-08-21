import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as moment from 'moment'
import { UserService } from 'src/app/service/user.service';
import { TodoService } from 'src/app/service/todo.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

    todos: any;
    title: string;
    description: string;
    toEditId: string;
    editDescription: string;
    editTitle: string;
    selectedUser: string;
    constructor(private router: Router, private readonly userService: UserService, private readonly todoService: TodoService, private authService: AuthService) { }
    connectedUser;
    ngOnInit() {
        this.userService.getConnectUser().subscribe((response: any) => {
            console.log(response.data.getUserWithToken)
            this.connectedUser = response.data.getUserWithToken
            this.todoService.getUserTodo().subscribe((response: any) => {
                response.data.getUserTodos.reverse()
                this.todos = response.data.getUserTodos;
            })

        })

    }
    checkEmpty() {
        return this.todos.length === 0
    }
    transformDate(date) {



        return moment(date).fromNow()

    }
    checkAdminAccess() {

        return this.connectedUser.adminAccess;
    }
    onClickEditTodo(todoid) {
        this.toEditId = todoid
    }
    onEditTodo() {
        this.todoService.updateTodo(this.toEditId, this.editTitle, this.editDescription).subscribe(response => {
            const index = this.todos.findIndex(todo => { return todo._id === this.toEditId })
            this.todos[index].title = this.editTitle;
            this.todos[index].description = this.editDescription;

        })
    }
    oneditTodoState(todoId: string, todoState: boolean) {
        this.todoService.updateTodoState(todoId, todoState).subscribe(response => {
            const todoIndex = this.todos.findIndex(todo => todo._id === todoId)
            this.todos[todoIndex].state = todoState;

        })
    }
    onDeleteTodo(todoid: string) {
        this.todoService.deleteTodo(todoid).subscribe(response => {
            this.todos = this.todos.filter(todo => { return todo._id !== todoid })
        })
    }
    onDeleteUser(userid: string) {
        this.userService.deleteUser(userid).subscribe(response => {

        }, error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'you dont have the access'
            })
        })
    }
}