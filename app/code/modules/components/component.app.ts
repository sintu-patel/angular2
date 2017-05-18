import { Component } from '@angular/core';
import { DATA } from './server/data-main';

@Component({
  selector: 'app',
  templateUrl: './app/code/modules/components/partial.app.html'
})

export class AppComponent {
	heading: string;
	linksHeading: string;
	categoriesHeading: string;
	DATA: any; // use any for complex data type (i.e. json)
	CATEGORIES: any;
	constructor() {
		this.heading = DATA.heading;
		this.DATA = DATA.data;
		this.linksHeading = DATA.linksHeading;
		this.categoriesHeading = DATA.categoriesHeading;
		this.CATEGORIES = DATA.categories;
	}
	onClick(e) {
		alert('faltu');
	}
}
