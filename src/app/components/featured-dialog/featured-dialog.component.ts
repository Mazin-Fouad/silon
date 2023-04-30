import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductData } from 'src/app/model/product-data';

@Component({
  selector: 'app-featured-dialog',
  templateUrl: './featured-dialog.component.html',
  styleUrls: ['./featured-dialog.component.scss'],
})
export class FeaturedDialogComponent implements OnInit {
  product: ProductData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductData) {
    this.product = this.data;
  }

  ngOnInit(): void {}
}
