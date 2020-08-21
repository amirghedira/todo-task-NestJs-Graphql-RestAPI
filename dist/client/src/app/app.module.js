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
const app_component_1 = require("./app.component");
const http_1 = require("@angular/common/http");
const todo_service_1 = require("./service/todo.service");
const user_service_1 = require("./service/user.service");
const auth_service_1 = require("./service/auth.service");
const apollo_angular_1 = require("apollo-angular");
const apollo_link_1 = require("apollo-link");
const apollo_angular_link_http_1 = require("apollo-angular-link-http");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const apollo_link_context_1 = require("apollo-link-context");
const apollo_link_error_1 = require("apollo-link-error");
const router_1 = require("@angular/router");
const token = 'something';
const auth = apollo_link_context_1.setContext((operation, context) => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
}));
const errorLink = apollo_link_error_1.onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
    }
    if (networkError) {
        console.log('networkError', networkError);
    }
});
const AppRoutes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            router_1.RouterModule.forRoot(AppRoutes),
            apollo_angular_1.ApolloModule,
            apollo_angular_link_http_1.HttpLinkModule,
        ],
        providers: [todo_service_1.TodoService, user_service_1.UserService, auth_service_1.AuthService, {
                provide: apollo_angular_1.APOLLO_OPTIONS,
                useFactory: (httpLink) => {
                    return {
                        cache: new apollo_cache_inmemory_1.InMemoryCache(),
                        link: apollo_link_1.ApolloLink.from([errorLink, auth, httpLink.create({ uri: "http://localhost:3000/graphql" })])
                    };
                },
                deps: [apollo_angular_link_http_1.HttpLink]
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map