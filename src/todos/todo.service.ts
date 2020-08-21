import { Injectable, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserService } from "src/users/user.service";
import { Todo } from "./types/todo";
@Injectable()
export class TodoService {

    constructor(@InjectModel('Todo') private TodoModel: Model<Todo>, private userService: UserService) { }


    getAssignedTodos = async (userId: string) => {

        try {

            const todos = await this.TodoModel.find({ writerid: userId }).populate([{ path: 'userid' }, { path: 'writerid' }]).exec();
            return todos
        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    getTodo = async (todoId: string) => {

        try {
            const todo = await this.TodoModel.find({ _id: todoId })
            return todo

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    getUserTodos = async (userId: string) => {
        try {
            const userTodos = await this.TodoModel.find({ userid: userId }).populate([{ path: 'userid' }, { path: 'writerid' }]).exec()
            return userTodos
        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    addTodo = async (senderId: any, userid: string, title: string, desc: string) => {

        const userSender = await this.userService.getUser(senderId)
        if (userSender.adminAccess)
            try {
                const newTodo = new this.TodoModel({
                    writerid: senderId,
                    userid: userid,
                    title: title,
                    description: desc,
                    date: new Date().toISOString()
                })
                const createdTodo = await newTodo.save();
                const todo = await this.TodoModel.findById(createdTodo._id).populate([{ path: 'userid' }, { path: 'writerid' }])
                return todo
            } catch (error) {

                return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        return new HttpException('permission denied', HttpStatus.FORBIDDEN)


    }
    deleteTodo = async (todoid: string, userid: string) => {
        try {

            const user = await this.userService.getUser(userid)
            const todo = await this.TodoModel.findById(todoid)
            if (todo)
                if (user.adminAccess || user._id === todo.userid) {

                    await this.TodoModel.deleteOne({ _id: todoid })
                    return todo
                }
                else
                    throw new HttpException('access denied', HttpStatus.FORBIDDEN);

            throw new HttpException('todo not found', HttpStatus.NOT_FOUND)
        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    editTodoState = async (todoId: string, todoState: boolean) => {

        try {
            const updatedTodo = await this.TodoModel.findByIdAndUpdate(todoId, { $set: { state: todoState } })
            return updatedTodo

        } catch (error) {
            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)

        }
    }
    editTodo = async (userid: string, todoId: string, title: string, description: string) => {

        try {
            const user = await this.userService.getUser(userid)
            const todo = await this.TodoModel.findById(todoId)
            if (todo)
                if (user.adminAccess || user._id === todo.userid) {

                    todo.title = title;
                    todo.description = description;
                    const updatedTodo = await todo.save()
                    return updatedTodo
                }
                else
                    throw new HttpException('access denied', HttpStatus.FORBIDDEN);

            throw new HttpException('todo not found', HttpStatus.NOT_FOUND)

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }


    }

}