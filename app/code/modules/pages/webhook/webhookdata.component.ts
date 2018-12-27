import { Component } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
  templateUrl: './partial.app.html',
  providers: [DataService]
})

export class WebHookData {
	pageData: any;
	loggedIn: boolean;
	constructor(private dataService: DataService) {
		this.pageData = [];
		this.loadData();
		this.loggedIn = sessionStorage['token'] && sessionStorage['token'] === '9910712381';
	}
	setData(data:any) {
		this.pageData = data.pageData;
	}
	loadData() {
		this.dataService.getWebhookData().subscribe(data => {
			this.setData(data);
		});
	}
}
