import { Injectable } from "@angular/core";
import { Product } from "./product";
import { PRODUCTS } from "./productsList";
@Injectable()
export class DataService {
    
    getData() {
        return PRODUCTS;
    }
    addData(product:Product){
        PRODUCTS.push(product);
    }
    delData(i:number){
        PRODUCTS.splice(i,1);
    }
    
    switchCase1(i: number) {
        return i == null ? PRODUCTS : PRODUCTS.filter(obj => obj.category == i);
    }
    

    isBgDanger(product: Product) {
        if (product.price > 500) {
          return true;
        } else {
          return false;
        }
      }
}

