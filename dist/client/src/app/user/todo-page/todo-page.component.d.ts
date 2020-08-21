import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { TodoService } from 'src/app/service/todo.service';
import { AuthService } from 'src/app/service/auth.service';
export declare class TodoPageComponent implements OnInit {
    private router;
    private readonly userService;
    private readonly todoService;
    private authService;
    todos: any;
    title: string;
    description: string;
    toEditId: string;
    editDescription: string;
    editTitle: string;
    selectedUser: string;
    constructor(router: Router, userService: UserService, todoService: TodoService, authService: AuthService);
    connectedUser: any;
    ngOnInit(): void;
    checkEmpty(): boolean;
    transformDate(date: any): string;
    checkAdminAccess(): any;
    onClickEditTodo(todoid: any): void;
    onEditTodo(): void;
    oneditTodoState(todoId: string, todoState: boolean): void;
    onDeleteTodo(todoid: string): void;
    onDeleteUser(userid: string): void;
}
