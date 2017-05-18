import { Component } from '@angular/core';
import { DATA } from './server/data-main';

@Component({
  selector: 'app',
  templateUrl: './app/code/modules/components/partial.app.html'
})

export class AppComponent {
	heading: string;
	DATA: any; // use any for complex data type (i.e. json)
	constructor() {
		this.heading = DATA.heading;
		this.DATA = DATA.data;
	}
	onClick(e) {
		alert('faltu');
	}
}
