import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {


    token: string;
    constructor() {
        this.token = localStorage.getItem('token')
    }

    setToken(token: string) {
        localStorage.setItem('token', token)
        this.token = token
    }
    getToken() {
        return this.token
    }
    eraseToken() {
        localStorage.removeItem('token')
        this.token = null;
    }

}