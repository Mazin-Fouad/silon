import { Component } from '@angular/core';
import { SilonData } from 'src/app/viewModel/silon-data';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss'],
})
export class LandingSectionComponent {
  storeInfo: SilonData;

  constructor() {
    this.storeInfo = {
      title: 'Silon',
      slogan: 'Home of Women Fashion',
      branches: ['Karlsruhe', 'Mannheim', 'Heidlberg'],
    };
  }
}
