import { Component } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
  templateUrl: './app/code/modules/pages/home/partial.app.html',
  providers: [DataService]
})

export class Home {
	heading: string;
	linksHeading: string;
	categoriesHeading: string;
	DATA: any; // use any for complex data type (i.e. json)
	CATEGORIES: any;
	profile = {};
	constructor(private dataService: DataService) {
		this.heading = "";
		this.DATA = [];
		this.linksHeading = "";
		this.categoriesHeading = "";
		this.CATEGORIES = "";
		this.loadUser();
	}
	onClick(e) {
		this.loadUser();
	}
	setData(data) {
		this.heading = data.heading;
		this.DATA = data.data;
		this.linksHeading = data.linksHeading;
		this.categoriesHeading = data.categoriesHeading;
		this.CATEGORIES = data.categories;
	}
	loadUser() {
		this.dataService.getData().subscribe(data => {
			this.setData(data);
		});
	}
}
