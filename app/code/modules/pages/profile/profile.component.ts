// Import component decorator
import { Component } from '@angular/core';
import { UserService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/profile/partial.app.html',
  providers: [UserService]
})

// Component class
export class Profile {
	id: number;
	list: any;
	heading: string;
	question: string;
	answer: string;
	constructor(private route:ActivatedRoute, private userService: UserService) {
		if(this.id >= 0) {
			this.loadUser();
		}
	}

	setData(data) {
		this.list = data.data[this.id];
		this.heading = data.heading;
		this.question = this.list.q;
		this.answer = this.list.a;
	}

	ngOnInit() {
        this.id = this.route.snapshot.queryParams["p"];
        this.loadUser();
    }
    loadUser() {
		this.userService.getUser().subscribe(data => {
			this.setData(data);
		});
	}
}