import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { TodoService } from 'src/app/service/todo.service';
import { AuthService } from 'src/app/service/auth.service';
export declare class ManageTodoComponent implements OnInit {
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
    users: any;
    selectedUser: string;
    constructor(router: Router, userService: UserService, todoService: TodoService, authService: AuthService);
    connectedUser: any;
    ngOnInit(): void;
    onPost(): void;
    transformDate(date: any): string;
    onClickEditTodo(todoid: any): void;
    onEditTodo(): void;
    oneditTodoState(todoId: string, todoState: boolean): void;
    onDeleteTodo(todoid: string): void;
    onDeleteUser(userid: string): void;
}
