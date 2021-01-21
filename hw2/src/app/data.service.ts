import { Injectable } from "@angular/core";
import { Product } from "./product";
import { PRODUCTS } from "./productsList";
@Injectable()
export class DataService {
    
    getData() {
        const items: Product[] = [];
        for (let i = 0; i<PRODUCTS.length; i++) {
            items[i] = PRODUCTS[i];
        }
        console.log(items);
        return items;
    }
    addData(product:Product){
        PRODUCTS.push(product);
    }
    delData(i:number){
        PRODUCTS.splice(i,1);
    }
    

}

