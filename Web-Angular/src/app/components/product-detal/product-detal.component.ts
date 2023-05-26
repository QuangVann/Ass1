import { IProduct } from './../../interfaces/product';
import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-product-detal',
  templateUrl: './product-detal.component.html',
  styleUrls: ['./product-detal.component.scss']
})
export class ProductDetalComponent {
  @Input('data') product!: IProduct
}
