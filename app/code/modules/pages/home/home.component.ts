import { Component } from '@angular/core';
import { UserService } from '../../app.service';

@Component({
  templateUrl: './app/code/modules/pages/home/partial.app.html',
  providers: [UserService]
})

export class Home {
	heading: string;
	linksHeading: string;
	categoriesHeading: string;
	DATA: any; // use any for complex data type (i.e. json)
	CATEGORIES: any;
	profile = {};
	constructor(private userService: UserService) {
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
		this.userService.getUser().subscribe(data => {
			this.setData(data);
		});
	}
}
