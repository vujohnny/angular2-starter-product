import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductFilter} from './product-filter.pipe'
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
    selector: 'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilter],
    directives: [StarComponent, ROUTER_DIRECTIVES] 
})
export /**
 * ProductListComponent
 */
class ProductListComponent implements OnInit{
    constructor(private _productService: ProductService){
            
    }
    
    pageTitle: string = 'Product List';
    imageWidth: number=60;
    imageMargin: number=2;
    showImage: boolean=false;
    listFilter:string='';
    errorMessage: string;
    products: IProduct[]=[];
    
    ngOnInit():void{
        this._productService.getProducts().subscribe(
            products => this.products=products,
            error => this.errorMessage=<any>error);
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    
    onRatingClicked(message:string): void{
        this.pageTitle='Product List: ' +message;
    }
}