import { OnInit, Component } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
;
import * as moment from 'moment'
import { UserService } from 'src/app/service/user.service';
import { TodoService } from 'src/app/service/todo.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
    templateUrl: './managetodo.component.html',
    styleUrls: ['./managetodo.component.css']
})
export class ManageTodoComponent implements OnInit {

    todos: any;
    title: string;
    description: string;
    toEditId: string;
    editDescription: string;
    editTitle: string;
    users: any;
    selectedUser: string;
    constructor(private router: Router, private readonly userService: UserService, private readonly todoService: TodoService, private authService: AuthService) { }
    connectedUser;
    ngOnInit() {

        if (this.authService.getToken()) {
            this.userService.getConnectUser().subscribe((user: any) => {
                this.connectedUser = user

                this.userService.getUsers().subscribe((users: any) => {
                    this.users = users.filter(usr => { return usr._id != user._id })
                })
                this.todoService.getTodos().subscribe((todos: any) => {
                    todos.reverse()
                    this.todos = todos;

                })
            })

        }
        else
            this.router.navigate(['/user/login'])

    }
    onPost() {
        const userIndex = this.users.findIndex(user => user.username === this.selectedUser)
        const assignedUserId = this.users[userIndex]._id
        if (this.title != '' && this.description != '')
            this.todoService.addTodo(assignedUserId, this.title, this.description).subscribe((response: any) => {
                this.todos.unshift(response)
                this.title = ''
                this.description = ''
            })
    }
    transformDate(date) {



        return moment(date).fromNow()

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