import { UserService } from './user.service';
import { AddUserInput, LoginInput, UpdateUserInput, UpdatePasswordInput } from './types/user.input';
import { User } from './types/user';
import { AuthService } from 'src/auth/auth.service';
export declare class UserResolver {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    login(loginInput: LoginInput): Promise<{
        user: any;
        token: string;
    }>;
    getUsers(): Promise<any>;
    getUserWithToken(user: any): Promise<any>;
    getUser(userid: string): Promise<any>;
    addUser(addUserInput: AddUserInput): Promise<any>;
    updateUser(userInput: UpdateUserInput, user: User): Promise<any>;
    updateUserPassword(updatePasswordInput: UpdatePasswordInput, user: User): Promise<any>;
    deleteUser(userId: string, user: User): Promise<any>;
}
