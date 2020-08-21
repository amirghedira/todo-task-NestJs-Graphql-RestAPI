"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const core_1 = require("@angular/core");
const auth_component_1 = require("./auth.component");
const signup_component_1 = require("./signup/signup.component");
const login_component_1 = require("./login/login.component");
const router_1 = require("@angular/router");
const usernavbar_module_1 = require("./userNavBar/usernavbar.module");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const authRoutes = [
    {
        path: '',
        component: auth_component_1.AuthComponent,
        children: [
            {
                path: 'signup',
                component: signup_component_1.SignUpComponent
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent
            },
            {
                path: '**',
                redirectTo: '/auth/login',
            },
        ]
    }
];
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    core_1.NgModule({
        declarations: [auth_component_1.AuthComponent, signup_component_1.SignUpComponent, login_component_1.LoginComponent],
        imports: [
            router_1.RouterModule.forChild(authRoutes),
            usernavbar_module_1.UserNavBarModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        exports: [router_1.RouterModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map