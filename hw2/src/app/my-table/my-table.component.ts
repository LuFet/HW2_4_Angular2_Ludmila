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
  products: any;
   // private dataService: DataService внедрение зависимости через конструктор
   constructor(private dataService: DataService) {
  }  

  ngOnInit() {
    //this.products = PRODUCTS.slice(0, this.rows);
    this.products = PRODUCTS;
  }  

  @Input()
  rows: number = PRODUCTS.length;

  delete(i:number) {
    //console.log("id: " + this.products[i].id);
    // this.products.splice(i, 1);
    this.dataService.delData(PRODUCTS.indexOf(this.products[i]));    
    this.ngOnInit();
    //this.rows -=1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.rows);
    if (changes.rows) {
      this.products = PRODUCTS.slice(0, changes.rows.currentValue);
    }
  }  

  switchCase(i: number){
    this.products = this.dataService.switchCase1(i);
  }
  
  switchCase0(){
    this.products =PRODUCTS;
  }
  isBgDanger(prod: Product) {
    return this.dataService.isBgDanger(prod)
  }

}
