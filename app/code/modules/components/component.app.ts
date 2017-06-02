import { Component } from '@angular/core';
import { labelConfig } from '../../config/app.labels';

@Component({
  selector: 'app',
  templateUrl: './app/code/modules/components/partial.app.html',
})

export class AppComponent {
    navData: any;
    commonLabels: any;
    constructor() {
        this.navData = labelConfig.navigation;
        this.commonLabels = labelConfig.common;
    }
}
