import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { ApolloLink } from 'apollo-link';

import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { UserNavBarModule } from './auth/userNavBar/usernavbar.module';
import { NavBarModule } from './navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';

const token = 'something';
const auth = setContext((operation, context) => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
}));

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
    }
    if (networkError) {
        console.log('networkError', networkError);
    }
});

const AppRoutes: Routes = [
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


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        ApolloModule,
        HttpLinkModule,
    ],
    providers: [TodoService, UserService, AuthService,
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: ApolloLink.from([errorLink, auth, httpLink.create({ uri: "http://localhost:3000/graphql" })])
                }
            },
            deps: [HttpLink]
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
