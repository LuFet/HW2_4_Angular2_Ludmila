import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from "../product";
import { PRODUCTS } from '../productsList';
import { DataService } from "../data.service";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit, OnChanges {
  public itemsSource: Product[] = PRODUCTS;
  products: any;
  // choice: string = "3";
   // private dataService: DataService внедрение зависимости через конструктор
   constructor(private dataService: DataService) {
  }  
  // getProducts(): Product[] {
  //   return PRODUCTS;
  // }
  private _productsRow: any[] = [];
  public get productsRow(): any[] {
    return this._productsRow;
  }

  public set productsRow(value: any[]) {
    this._productsRow = value;
  }

  ngOnInit() {
    this.products = this.dataService.getData();
  }  

  @Input()
  rows: number = 0;

  delete(i:number) {
    console.log("id: " + this.products[i].id);
    this.products.splice(i, 1);
    //this.products = this.dataService.delData(i);
    this.rows -=1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.rows);
    if (changes.rows) {
      this.products = PRODUCTS.slice(0, changes.rows.currentValue);
    }
  }  
  
  isBgDanger(i: number) {
    if (this.products[i].price > 500) {
      return true;
    } else {
      return false;
    }
  }

  showCategory1(i:number) {
    if (this.products[i].category == 1) {
      return true;
    } else {
      return false;
    }
  }

  showCategory2(i:number) {
    if (this.products[i].category == 2) {
      return true;
    } else {
      return false;
    }
  }

  showCategory3(i:number) {
    if (this.products[i].category == 3) {
      return true;
    } else {
      return false;
    }
  }

  choice: number =0;
  switchCase1() {
    this.products = PRODUCTS.filter(obj => obj.category == 1);
    return (this.choice = 1);
  }

  switchCase2() {
    this.products = PRODUCTS.filter(obj => obj.category == 2);
    return (this.choice = 2);
  }

  switchCase3() {
    this.products = PRODUCTS.filter(obj => obj.category == 3);
    return (this.choice = 3);
  }
}
