"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const signup_component_1 = require("./signup/signup.component");
const login_component_1 = require("./login/login.component");
const navbar_component_1 = require("./navbar/navbar.component");
const todo_component_1 = require("./todo/todo.component");
const http_1 = require("@angular/common/http");
const todo_service_1 = require("./service/todo.service");
const user_service_1 = require("./service/user.service");
const auth_service_1 = require("./service/auth.service");
const profile_component_1 = require("./profile/profile.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, signup_component_1.SignUpComponent, login_component_1.LoginComponent, navbar_component_1.NavbarComponent, todo_component_1.TodoComponent, profile_component_1.ProfileComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpClientModule
        ],
        providers: [todo_service_1.TodoService, user_service_1.UserService, auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map