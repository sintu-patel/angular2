// Import component decorator
import { Component } from '@angular/core';
import { DATA } from './server/data-main';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/profile/partial.app.html'
})

// Component class
export class Profile {
	constructor(private route:ActivatedRoute) {
		this.id = this.route.snapshot.params['id'];
		this.list = DATA.data[this.id];
		this.heading = DATA.heading;
		this.question = this.list.issue;
		this.answer = this.list.resolution;
	}
}