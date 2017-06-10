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
    fileData: any;
    files: any;
    latestFile: any;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
        this.fileData = [];
        this.files = [];
        this.latestFile = [];
		this.loadFineList();
	}

	setData(data) {
        this.files = data.files;
        const fileCount = this.files && this.files.length;
        const latestFileNumber = fileCount - 1;
		this.latestFile = this.files[latestFileNumber];
        this.fileData = this.latestFile.fileData;
	}

    loadFineList() {
		this.dataService.getFineData().subscribe(data => {
			this.setData(data);
		});
	}
}