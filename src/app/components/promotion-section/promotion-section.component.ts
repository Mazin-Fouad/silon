import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/services/promotion-ads.service';

@Component({
  selector: 'app-promotion-section',
  templateUrl: './promotion-section.component.html',
  styleUrls: ['./promotion-section.component.scss'],
})
export class PromotionSectionComponent implements OnInit, OnDestroy {
  subscribtion!: Subscription;
  message: string = '';
  constructor(private promotionService: PromotionAdsService) {}

  ngOnInit(): void {
    // let obsever = {
    //   next: (data: string) => {
    //     console.log(data);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Ads Completed');
    //   },
    // };
    // this.promotionService.getScheduleAds(3).subscribe(obsever);

    this.subscribtion = this.promotionService.getScheduleAds(5).subscribe({
      next: (data: string) => {
        console.log(data);
        this.message = data;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log('Ads Completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
