import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/model/product-data';
import { ProductService } from 'src/app/services/product.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { FeaturedDialogComponent } from '../featured-dialog/featured-dialog.component';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent implements OnInit {
  products: ProductData[] = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  prdTrackBy(index: number, prd: ProductData): number {
    return prd.id;
  }

  // openDialog(prd: ProductData): void {
  //   const dialogRef = this.dialog.open(FeaturedDialogComponent, {});
  // }

  openDialog(prd: ProductData): void {
    const dialogRef = this.dialog.open(FeaturedDialogComponent, {
      data: prd,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
