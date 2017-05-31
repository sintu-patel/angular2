// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/correctfile/partial.app.html',
  providers: [DataService]
})

// Component class
export class CorrectFile {
    fileData: any;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
        this.fileData = [];
		this.loadFineList();
	}

	setData(data) {
		this.fileData = data.fileData;
	}

    loadFineList() {
		this.dataService.getFineData().subscribe(data => {
			this.setData(data);
		});
	}
}