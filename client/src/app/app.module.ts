import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent, NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ],
    providers: [TodoService, UserService, AuthService,
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: "http://localhost:3000/graphql"
                    })
                }
            },
            deps: [HttpLink]
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
