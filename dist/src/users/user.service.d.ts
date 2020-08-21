import { Model } from 'mongoose';
import { User } from "./types/user";
import { Todo } from "src/todos/types/todo";
export declare class UserService {
    private UserModel;
    private TodoModel;
    constructor(UserModel: Model<User>, TodoModel: Model<Todo>);
    getUsers: () => Promise<any>;
    addUser: (username: string, password: string, name: string, surname: string) => Promise<any>;
    getUser: (userid: string) => Promise<any>;
    getUserByUsrname: (username: string) => Promise<any>;
    getUserByToken: (userId: string) => Promise<any>;
    editUser: (senderId: string, userId: string, username: string, name: string, surname: string, access: string) => Promise<any>;
    updatePassword: (senderId: string, userId: string, oldPassword: string, newPassword: string) => Promise<any>;
    deleteUser: (senderId: string, userId: string) => Promise<any>;
}
