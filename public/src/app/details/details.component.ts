import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    console.log('details.component.ts > ngOnInit()');
    this._route.params.subscribe((params: Params) => {

      this._productService.readOne(params['id'])
      .subscribe((server_response) => {
        console.log('details.Component > ngOnInit > readOne(..) => server_response =>', server_response);
        this.product = server_response['data'];
      });

    });
  }

  delete(id) {
    console.log('details.component.ts > delete()');
    const delobs = this._productService.delete(id);
    delobs.subscribe(server_response => {
      console.log('component > detailsComponent > remove(' + id + ') > server_response =>', server_response);
      this._router.navigate(['/']);
    });
  }

}
