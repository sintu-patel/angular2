// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/finelist/partial.app.html',
  providers: [DataService]
})

// Component class
export class FineList {
	constructor(private route:ActivatedRoute, private dataService: DataService) {
		this.loadFineList();
	}

	setData(data) {
		console.log(data);
	}

    loadFineList() {
		this.dataService.getFineData().subscribe(data => {
			this.setData(data);
		});
	}
}