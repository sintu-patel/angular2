// Import component decorator
import { Component } from '@angular/core';
import { DATA } from './server/data-main';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/profile/partial.app.html'
})

// Component class
export class Profile {
	id: number;
	list: any;
	heading: string;
	question: string;
	answer: string;
	constructor(private route:ActivatedRoute) {
		if(this.id >= 0) {
			this.setData();
		}
	}

	setData() {
		this.list = DATA.data[this.id];
		this.heading = DATA.heading;
		this.question = this.list.issue;
		this.answer = this.list.resolution;
	}

	ngOnInit() {
        this.id = this.route.snapshot.queryParams["p"];
        this.setData();
    }
}