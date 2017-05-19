// Import component decorator
import { Component } from '@angular/core';
import { DATA } from './server/data-main';

@Component({
  templateUrl: './app/code/modules/pages/profile/partial.app.html'
})

// Component class
export class Profile {
	constructor() {
		this.list = DATA.data[5];
		this.heading = DATA.heading;
		this.question = this.list.issue;
		this.answer = this.list.resolution;
	}
}