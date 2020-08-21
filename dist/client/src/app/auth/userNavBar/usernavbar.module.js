"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNavBarModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const usernavbar_component_1 = require("./usernavbar.component");
let UserNavBarModule = class UserNavBarModule {
};
UserNavBarModule = __decorate([
    core_1.NgModule({
        declarations: [
            usernavbar_component_1.UserNavBarComponent
        ],
        imports: [
            router_1.RouterModule,
            forms_1.FormsModule,
            common_1.CommonModule,
        ],
        exports: [usernavbar_component_1.UserNavBarComponent]
    })
], UserNavBarModule);
exports.UserNavBarModule = UserNavBarModule;
//# sourceMappingURL=usernavbar.module.js.map