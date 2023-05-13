import { Component } from '@angular/core';
import { product } from 'src/app/datas/mockData';
import { IProduct } from 'src/common/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product = product
}
