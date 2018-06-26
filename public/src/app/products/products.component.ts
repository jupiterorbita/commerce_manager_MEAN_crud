import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products_arr: any;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    console.log('>products.component.ts > ngOnInit >');
    this.getAll();
  }

  getAll() {
    console.log('>pets.component.ts > getAll() >');
    this._productService.readAll().subscribe(
      (server_response) => {
      console.log(
        'pets.component.ts > getAll() > server_response =>',
        server_response
      );
      this.products_arr = server_response['data'];
    });
  }
}
