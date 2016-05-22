import {Component} from '@angular/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import {ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';

@Component ({
    selector:'my-app',
    template:`
        <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div> 
                `,
    directives:[ROUTER_DIRECTIVES],
    providers: [ProductService, ROUTER_PROVIDERS]
})

@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/home', component: WelcomeComponent},
    { path: '/products', component:ProductListComponent},
    { path: '/product/:id', component: ProductDetailComponent }
    ])
    
export class AppComponent {
    pageTitle: string = "APP";
}
