import { Component } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
  templateUrl: './partial.app.html',
  providers: [DataService]
})

export class Home {
	DATA: any; // use any for complex data type (i.e. json)
	constructor(private dataService: DataService) {
		this.DATA = [];
		this.loadUser();
	}
	onClick(e:any) {
		this.loadUser();
	}
	setData(data:any) {
		this.DATA = data.data;
	}
	loadUser() {
		this.dataService.getData().subscribe(data => {
			this.setData(data);
		});
	}
}
