"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const login_component_1 = require("./login/login.component");
const signup_component_1 = require("./signup/signup.component");
const todo_component_1 = require("./todo/todo.component");
const profile_component_1 = require("./profile/profile.component");
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    },
    {
        path: 'todos',
        component: todo_component_1.TodoComponent
    },
    {
        path: 'profile/:id',
        component: profile_component_1.ProfileComponent
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];
//# sourceMappingURL=app.routing.js.map