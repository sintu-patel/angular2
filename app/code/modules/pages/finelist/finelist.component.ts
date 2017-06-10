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
    totalFiles: number;
    latestFileNumber: number;
    displayFileNumber: number;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
        this.fileData = [];
        this.files = [];
        this.latestFile = [];
		this.loadFineList();
	}

	setData(data) {
        this.files = data.files;
        this.totalFiles = this.files && this.files.length;
        this.latestFileNumber = this.totalFiles - 1;
        this.displayFileNumber = this.latestFileNumber;
		this.latestFile = this.files[this.latestFileNumber];
        this.fileData = this.latestFile.fileData;
	}

    displayPage() {
        this.fileData = this.files[this.displayFileNumber].fileData;
    }

    loadFineList() {
		this.dataService.getFineData().subscribe(data => {
			this.setData(data);
		});
	}

    prevFine() {
        if (this.displayFileNumber > 0) {
            this.displayFileNumber = this.displayFileNumber - 1;
            this.displayPage();
        }
    }

    nextFine() {
        if (this.displayFileNumber < this.latestFileNumber) {
            this.displayFileNumber = this.displayFileNumber + 1;
            this.displayPage();
        }
    }

    currentFine() {
        this.displayFileNumber = this.latestFileNumber;
        this.displayPage();
    }
}