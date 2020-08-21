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

    @UseGuards(GqlAuthGuard)
    @Query(() => [TodoType])
    async getUserTodos(@CurrentUser() user: User) {
        return await this.todoService.getUserTodos(user._id)
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [TodoType])
    async userTodos(@CurrentUser() user: User) {
        return await this.todoService.getUserTodos(user._id)
    }


    @UseGuards(GqlAuthGuard)
    @Query(() => [TodoType])
    async getAssignedTodos(@CurrentUser() user: User) {
        return await this.todoService.getAssignedTodos(user._id)
    }

    @Query(() => TodoType)
    async getTodo(@Args('todoId') todoId: string) {
        return await this.todoService.getTodo(todoId);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => TodoType)
    async addTodo(@Args('addTodoInput') addTodoInput: AddTodoInput, @CurrentUser() user: User) {

        const { userId, title, description } = addTodoInput;
        return await this.todoService.addTodo(user._id, userId, title, description);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => TodoType)
    async deleteTodo(@Args('todoId') todoId: string, @CurrentUser() user: User) {
        return await this.todoService.deleteTodo(todoId, user._id)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => TodoType)
    async updateState(@Args('todoId') todoId: string, @Args('state') state: boolean) {
        return await this.todoService.editTodoState(todoId, state)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => TodoType)
    async updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput, @CurrentUser() user: User) {

        const { todoId, title, description } = updateTodoInput
        return await this.todoService.editTodo(user._id, todoId, title, description)
    }











}