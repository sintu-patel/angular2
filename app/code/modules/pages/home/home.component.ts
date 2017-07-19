import { Component } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
  templateUrl: './app/code/modules/pages/home/partial.app.html',
  providers: [DataService]
})

export class Home {
	DATA: any; // use any for complex data type (i.e. json)
	constructor(private dataService: DataService) {
		this.DATA = [];
		this.loadUser();
	}
	onClick(e) {
		this.loadUser();
	}
	setData(data) {
		this.DATA = data.data.reverse();
	}
	loadUser() {
		this.dataService.getData().subscribe(data => {
			this.setData(data);
		});
	}
}
