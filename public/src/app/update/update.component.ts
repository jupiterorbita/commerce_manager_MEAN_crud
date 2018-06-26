import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product: any;
  msg: any;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('Component > detailsComponent > ngOnInit');
    this._route.params.subscribe((params: Params) => {

      console.log('Component > detailsComponent > ngOnInit > params.id', params['id']);
      const getoneObs = this._productService.readOne(params['id']);
      getoneObs.subscribe(server_response => {
        console.log('Component > detailsComponent > ngOnInit > got ONE_pet from server =>', server_response);
        this.product = server_response['data'];
      });

    });
  }



  update() {
    console.log('Component > updateComponent > update() >');
    console.log('updated formdata ======>', this.product);
    this._productService.updateOne(this.product, this.product._id)
    .subscribe(

      server_response => {
        console.log('Component > updateComponent > update() >> server_response', server_response);
        if (server_response['error']) {
          this.msg = server_response;
          // this.msg = server_response['error']['errors']['message'];
          console.log('Component > updateComponent > update() >> error >msg: ', this.msg);
        } else {
          this.msg = '';
          this._router.navigate(['/']);
        }
      },
      // err => {
      //   console.log('ERROR: ', err);
      // },
      // () => {
      // }
    );
  }

}
