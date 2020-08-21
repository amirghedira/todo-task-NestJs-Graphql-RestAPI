import { UserService } from 'src/users/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    login(loginInput: any): Promise<{
        user: any;
        token: string;
    }>;
}
