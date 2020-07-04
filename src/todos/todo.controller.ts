import { Controller, Get, Param, Post, Body, Delete, Patch, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { TodoService } from './todo.service'
import { JwtAuthGuard } from "src/auth/jwt-auth.gard";
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }


    @Get()
    async getTodos() {
        return await this.todoService.getTodos()
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async getUserTodos(@Request() req: any) {


        return await this.todoService.getUserTodos(req.user._id)

    }


    @Get(':id')
    async getTodo(@Param('id') todoId) {

        return await this.todoService.getTodo(todoId)
    }



    @UseGuards(JwtAuthGuard)
    @Post()
    async addTodo(
        @Request() req: any,
        @Body('userid') userId: string,
        @Body('title') title: string,
        @Body('description') description: string,
    ) {
        return await this.todoService.addTodo(req.user._id, userId, title, description)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteTodo(@Param('id') todoId: string, @Request() req) {

        this.todoService.deleteTodo(todoId, req.user._id)
    }
    @UseGuards(JwtAuthGuard)
    @Patch('state/:id')
    async updateState(
        @Param('id') todoId: string,
        @Body('state') state: boolean,

    ) {
        return await this.todoService.editTodoState(todoId, state)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateTodo(
        @Request() req: any,
        @Param('id') todoId: string,
        @Body('title') title: string,
        @Body('description') description: string,

    ) {
        return await this.todoService.editTodo(todoId, req.user._id, title, description)
    }

}