import { Injectable, Inject, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Todo } from './todo.model'
import { Model } from 'mongoose'
import { UserService } from "src/users/user.service";
@Injectable()
export class TodoService {

    constructor(@InjectModel('Todo') private TodoModel: Model<Todo>, private userService: UserService) { }

    getTodos = async () => {

        try {

            const todos = await this.TodoModel.find().populate([{ path: 'userid', writerid: 'writerid' }]).exec();
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
            const userTodos = await this.TodoModel.find({ userid: userId }).populate([{ path: 'writerid' }]).exec()
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
                const todo = await this.TodoModel.findById(createdTodo._id).populate('userid')
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
                    return { message: 'todo successfully deleted' }
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
            await this.TodoModel.updateOne({ _id: todoId }, { $set: { state: todoState } })
            return { message: 'todo successfully updated' }

        } catch (error) {
            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)

        }
    }
    editTodo = async (todoId: string, userid: string, title: string, description: string) => {

        try {
            const user = await this.userService.getUser(userid)
            const todo = await this.TodoModel.findById(todoId)
            if (todo)
                if (user.adminAccess || user._id === todo.userid) {

                    todo.title = title;
                    todo.description = description;
                    await todo.save()
                    return { message: 'todo successfully updated' }
                }
                else
                    throw new HttpException('access denied', HttpStatus.FORBIDDEN);

            throw new HttpException('todo not found', HttpStatus.NOT_FOUND)

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }


    }

}