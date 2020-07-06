import { HttpException } from "@nestjs/common";
import { Model } from 'mongoose';
import { User } from "./types/user";
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<User>);
    getUsers: () => Promise<any>;
    addUser: (username: string, password: string, name: string, surname: string) => Promise<any>;
    getUser: (userid: string) => Promise<any>;
    getUserByUsrname: (username: string) => Promise<any>;
    getUserByToken: (userId: string) => Promise<any>;
    editUser: (senderId: string, userId: string, username: string, name: string, surname: string, access: string) => Promise<HttpException | {
        message: string;
    }>;
    updatePassword: (senderId: string, userId: string, oldPassword: string, newPassword: string) => Promise<any>;
    deleteUser: (senderId: string, userId: string) => Promise<HttpException | {
        message: string;
    }>;
}
