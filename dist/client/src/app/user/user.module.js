"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const todo_service_1 = require("../service/todo.service");
const user_service_1 = require("../service/user.service");
const auth_service_1 = require("../service/auth.service");
const profile_component_1 = require("./profile/profile.component");
const todo_page_component_1 = require("./todo-page/todo-page.component");
const common_1 = require("@angular/common");
const navbar_module_1 = require("../navbar/navbar.module");
const router_1 = require("@angular/router");
const user_component_1 = require("./user.component");
const userRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent,
        children: [
            {
                path: 'todos',
                component: todo_page_component_1.TodoPageComponent
            },
            {
                path: 'profile/:id',
                component: profile_component_1.ProfileComponent
            },
            {
                path: '',
                redirectTo: '/',
            },
        ]
    }
];
let UserModule = class UserModule {
};
UserModule = __decorate([
    core_1.NgModule({
        declarations: [
            user_component_1.UserComponent, profile_component_1.ProfileComponent, todo_page_component_1.TodoPageComponent
        ],
        imports: [
            router_1.RouterModule.forChild(userRoutes),
            common_1.CommonModule,
            navbar_module_1.NavBarModule,
            forms_1.FormsModule
        ],
        providers: [todo_service_1.TodoService, user_service_1.UserService, auth_service_1.AuthService]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map