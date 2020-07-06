export declare class AuthService {
    token: string;
    constructor();
    setToken(token: string): void;
    getToken(): string;
    eraseToken(): void;
}
