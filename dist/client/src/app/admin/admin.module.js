"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const manage_profiles_component_1 = require("./manage-profiles/manage-profiles.component");
const managetodo_component_1 = require("./managetodo/managetodo.component");
const todo_service_1 = require("../service/todo.service");
const user_service_1 = require("../service/user.service");
const auth_service_1 = require("../service/auth.service");
const common_1 = require("@angular/common");
const navbar_module_1 = require("../navbar/navbar.module");
const admin_component_1 = require("./admin.component");
const router_1 = require("@angular/router");
const adminRoutes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: 'manage-todo',
                component: managetodo_component_1.ManageTodoComponent
            },
            {
                path: 'manage-profile/:id',
                component: manage_profiles_component_1.ManageProfileComponent
            },
            {
                path: '**',
                redirectTo: 'manage-todo',
            },
        ]
    }
];
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    core_1.NgModule({
        declarations: [
            admin_component_1.AdminComponent, managetodo_component_1.ManageTodoComponent, manage_profiles_component_1.ManageProfileComponent
        ],
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild(adminRoutes),
            navbar_module_1.NavBarModule
        ],
        providers: [todo_service_1.TodoService, user_service_1.UserService, auth_service_1.AuthService]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map