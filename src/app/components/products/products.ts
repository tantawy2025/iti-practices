import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

   products: Product[];

   constructor(){
    this.products = [
      new Product('Laptop', 1200, 'https://via.placeholder.com/150'),
      new Product('Phone', 800, 'https://via.placeholder.com/150'),
      new Product('Headphones', 200, 'https://via.placeholder.com/150'),
      new Product('Camera', 500, 'https://via.placeholder.com/150'),
      new Product('Smartwatch', 250, 'https://via.placeholder.com/150')
    ];
   }

  
}
