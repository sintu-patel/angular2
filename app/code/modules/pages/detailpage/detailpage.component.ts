// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/detailpage/partial.app.html',
  providers: [DataService]
})

// Component class
export class DetailPage {
	id: number;
	list: any;
	heading: string;
	question: string;
	answer: string;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
		if(this.id >= 0) {
			this.loadUser();
		}
	}

	setData(data) {
		let $this = this;
		data.data.filter(function(item) {
			if ($this.id === item._id) {
				$this.list = item;
				$this.heading = data.heading;
				$this.question = $this.list.issue;
				$this.answer = $this.list.resolution;
				console.log($this.list);
			}
		});
	}

	ngOnInit() {
        this.id = this.route.snapshot.queryParams["p"];
        this.loadUser();
    }
    loadUser() {
		this.dataService.getData().subscribe(data => {
			this.setData(data);
		});
	}
}