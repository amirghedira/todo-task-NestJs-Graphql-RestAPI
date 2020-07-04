import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './user.model'
import * as bcrypt from 'bcrypt'
@Injectable()
export class UserService {

    constructor(@InjectModel('User') private UserModel: Model<User>) { }

    getUsers = async () => {
        try {
            const users = await this.UserModel.find()
            return users;

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    addUser = async (username: string, password: string, name: string, surname: string) => {


        try {

            const users = await this.UserModel.find()
            const filtredUsers = users.filter(user => { return user.username === username })
            let accessAdmin = false;
            if (users.length === 0) accessAdmin = true;
            if (filtredUsers.length === 0) {
                const hashedpass = await bcrypt.hash(password, 11);
                const newUser = new this.UserModel({
                    username,
                    surname,
                    name,
                    password: hashedpass,
                    adminAccess: accessAdmin
                })
                const createduser = await newUser.save()
                return createduser._id;
            }
            throw new HttpException('user already exists', HttpStatus.CONFLICT)
        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    getUser = async (userid: string) => {

        try {
            const user = await this.UserModel.findOne({ _id: userid })
            if (user)
                return user

            throw new HttpException('user not found', HttpStatus.NOT_FOUND)

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    getUserByUsrname = async (username: string) => {

        try {
            const user = await this.UserModel.findOne({ username: username })
            if (user)
                return user

            throw new HttpException('user not found', HttpStatus.NOT_FOUND)

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    getUserByToken = async (userId: string) => {

        try {
            const user = await this.UserModel.findById(userId).exec()
            if (user)
                return user
            throw new HttpException('user not found', HttpStatus.NOT_FOUND)

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    editUser = async (senderId: string, userId: string, username: string, name: string, surname: string, access: string) => {

        try {

            const user = await this.UserModel.findOne({ _id: senderId }).exec()
            if (user && (user.adminAccess || user._id === userId)) {
                await this.UserModel.updateOne({ _id: userId }, { $set: { username: username, name: name, surname: surname, adminAccess: access } })
                return { message: 'user successfully updated' }
            }

            throw new HttpException('username already exists', HttpStatus.CONFLICT)
        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    updatePassword = async (senderId: string, userId: string, oldPassword: string, newPassword: string) => {

        try {
            const userSender = await this.UserModel.findById(senderId)
            const user = await this.UserModel.findById(userId)

            if (user) {
                if (userSender.adminAccess) {
                    const hashedpass = await bcrypt.hash(newPassword, 11);
                    user.password = hashedpass;
                    return await user.save()
                }
                else if (userSender._id === userId)
                    if (await bcrypt.compare(oldPassword, user.password)) {
                        const hashedpass = await bcrypt.hash(newPassword, 11);
                        user.password = hashedpass;
                        return await user.save()
                    }
                throw new HttpException('Wrong password', HttpStatus.FORBIDDEN)

            }
            throw new HttpException('user not found', HttpStatus.NOT_FOUND)

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    deleteUser = async (userId: string, senderId: string) => {

        try {
            const user = await this.UserModel.findOne({ _id: senderId })
            if (user && (user.adminAccess || user._id === userId)) {
                await this.UserModel.deleteOne({ _id: userId })
                return { message: 'user successfully deleted' }
            }
            throw new HttpException('user not found', HttpStatus.NOT_FOUND)

        } catch (error) {

            return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
}