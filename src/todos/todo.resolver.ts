import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { TodoService } from "./todo.service";
import { TodoType } from "./types/todo.type";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/auth/gql-auth.gard";
import { CurrentUser } from "src/auth/currentuser.decorator";
import { User } from "src/users/types/user";
import { AddTodoInput, UpdateTodoInput } from "./types/todo.input";

@Resolver('Todo')
export class TodoResolver {

    constructor(private todoService: TodoService) { }

    @Query(() => [TodoType])
    async getTodos() {
        return this.todoService.getTodos()
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [TodoType])
    userTodos(@CurrentUser() user: User) {
        console.log(user)
        return this.todoService.getUserTodos(user._id)
    }

    @Query(() => TodoType)
    getTodo(@Args('todoId') todoId: string) {
        return this.todoService.getTodo(todoId);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [TodoType])
    addTodo(@Args('addTodoInput') addTodoInput: AddTodoInput, @CurrentUser() user: User) {

        const { userId, title, description } = addTodoInput;
        return this.todoService.addTodo(user._id, userId, title, description);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => TodoType)
    deleteTodo(@Args('todoId') todoId: string, @CurrentUser() user: User) {
        return this.todoService.deleteTodo(todoId, user._id)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => TodoType)
    updateState(@Args('todoId') todoId: string, @Args('state') state: boolean) {
        return this.todoService.editTodoState(todoId, state)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => TodoType)
    updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput, @CurrentUser() user: User) {

        const { todoId, title, description } = updateTodoInput
        return this.todoService.editTodo(user._id, todoId, title, description)
    }











}