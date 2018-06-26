import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }


  create(newProduct) {
    console.log('> Product.service.ts > create(newProduct) > SERVER >');
    return this._http.post('/create', newProduct);
  }

  readAll() {
    console.log('> product.service.ts > readAll() > SERVER >');
    return this._http.get('/readall');
  }

  readOne(id) {
    console.log('====> id> ', id);
    console.log('> product.service.ts > readOne(id) > SERVER >');
    return this._http.get('/readone/' + id);
  }

  delete(id) {
    console.log('====> id> ', id);
    console.log('> product.service.ts > delete(id) > SERVER >');
    return this._http.delete('/delete/' + id);
  }

  updateOne(product, product_id) {
    console.log('product.SERVICE.TS > updateproduct(product, product_id)');
    console.log('product.SERVICE.TS > updateproduct(product, product_id) > /products/:id/edit');
    console.log('product.SERVICE.TS > updateproduct(product, product_id) > product_id =>', product_id);
    console.log('product.SERVICE.TS > updateproduct(product, product_id) > product =>', product);
    return this._http.put('/product/edit/' + product_id, product);
  }







}
