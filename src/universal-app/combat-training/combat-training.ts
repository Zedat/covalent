import { Component, NgModule, OnInit } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// import your components here for combat-training and see if they can survive the battle

// import { CovalentPagingModule } from '@covalent/core/paging';
// import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';
// import { CovalentNotificationsModule } from '@covalent/core';
// import { CovalentMessageModule } from '@covalent/core';
import {
  CovalentPagingModule,
  CovalentVirtualScrollModule,
  CovalentNotificationsModule,
  CovalentCommonModule,
  TdFadeInOutAnimation,
  CovalentMessageModule,
  CovalentChipsModule,
} from '@covalent/core';

import {
  MatSliderModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';

/**
 * This component is used to test whether or if the supplied Covalent components can be
 * rendered server side. If not then a diagnostic error will let us know what needs to be
 * fixed inorder to make them server side compatible.
 *
 * Use `npm run combat-training` to run the server side rendering diagnostic script.
 */
@Component({
  selector: 'combat-training',
  templateUrl: './combat-training.html',
  styleUrls: ['./combat-training.css'],
  animations: [
    TdFadeInOutAnimation(), // using implicit anchor name 'tdFadeInOut' in template
  ],
})
export class CombatTrainingComponent implements OnInit {
  data: any[] = [
    {index: 0, name: 'element-0' },
    {index: 1, name: 'element-1' },
    {index: 2, name: 'element-2' },
    {index: 3, name: 'element-3' },
  ];

  testDigit: number = 3.975086;

  triggerState: boolean = false;

  strings: string[] = [
    'stepper',
    'expansion-panel',
    'markdown',
    'highlight',
    'loading',
    'media',
    'chips',
    'http',
    'json-formatter',
    'pipes',
    'need more?',
  ];

  filteredStrings: string[];
  stringsModel: string[] = this.strings.slice(0, 6);

  filterStrings(value: string): void {
    this.filteredStrings = this.strings.filter((item: any) => {
      if (value) {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredItem: any) => {
      return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
    });
  }

  ngOnInit(): void {
    this.filterStrings('');
  }

}

/**
 * Client side module
 */
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'combat-training' }),
    CommonModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,

    // Add additional Covalent components here and within the template
    CovalentPagingModule,
    CovalentVirtualScrollModule,
    CovalentNotificationsModule,

    CovalentCommonModule,
    CovalentMessageModule,
    CovalentChipsModule,
  ],
  bootstrap: [CombatTrainingComponent],
  declarations: [CombatTrainingComponent],
})
export class CombatTrainingClientModule { }

/**
 * Server side module
 */
@NgModule({
  imports: [CombatTrainingClientModule, ServerModule],
  bootstrap: [CombatTrainingComponent],
})
export class CombatTrainingServerModule { }
