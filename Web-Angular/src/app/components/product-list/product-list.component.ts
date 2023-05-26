import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from './../../server/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products : IProduct [] = []
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(data => {
      this.products = data
    })
  }
product!: IProduct

}
