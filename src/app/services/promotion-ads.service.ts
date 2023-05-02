import { Injectable } from '@angular/core';
import { Observable, from, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  adsList: string[];
  constructor() {
    this.adsList = [
      'Big Sales Everyday',
      '50% Sale for all Accessories',
      //'',
      '20% Discount for your first order',
      'Special Offer after 2 Orders',
    ];
  }

  // getSerialAds(): Observable<string> {
  //   return from(this.adsList);
  // }

  getScheduleAds(secondsInterval: number): Observable<string> {
    return new Observable<string>((obsever) => {
      // obsever.next();
      // obsever.error();
      // obsever.complete();
      let counter = 0;

      let adsTimer = setInterval(() => {
        if (counter === this.adsList.length) {
          obsever.complete();
        }

        if (this.adsList[counter] === '') {
          obsever.error('No ads found');
        }

        obsever.next(this.adsList[counter]);
        counter++;
      }, secondsInterval * 1000);

      return {
        unsubscribe() {
          clearInterval(adsTimer);
        },
      };
    });
  }
}
