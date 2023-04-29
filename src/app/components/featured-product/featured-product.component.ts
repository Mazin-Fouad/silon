import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/model/product-data';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent implements OnInit {
  products: ProductData[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  prdTrackBy(index: number, prd: ProductData): number {
    return prd.id;
  }
}
