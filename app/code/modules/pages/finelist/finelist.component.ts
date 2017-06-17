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
    llpCloseDate: any;
    totalFine: number;
    totalCollection: number;
    totalDue: number;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
        this.totalFine = 0;
        this.totalCollection = 0;
        this.totalDue = 0;
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
        this.llpCloseDate = this.latestFile.llpCloseDate;
        this.totalFineAmount();
        this.getTotalDue();
	}

    displayPage() {
        this.fileData = this.files[this.displayFileNumber].fileData;
        this.llpCloseDate = this.files[this.displayFileNumber].llpCloseDate;
        this.totalFineAmount();
        this.getTotalDue();
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

    processHistoryData(empid) {
        let individualUserHistory = [];
        let files = this.files;
        let fileData;
        let totalDue = 0;
        let dueArray = [];
        for(let i = 0; i < files.length; i++) {
            fileData = files[i].fileData;
                for(let j = 0; j < fileData.length; j++) {
                    if (fileData[j] && fileData[j].empid && fileData[j].empid === empid) {
                        let fine = fileData[j].fine;
                        if (fine) {
                            fine = parseInt(fine, 10);
                            let collectedfine = fileData[j].collectedfine;
                            if (!collectedfine) {
                                collectedfine = 0;
                            }
                            collectedfine = parseInt(collectedfine, 10);
                            let due = fine - collectedfine;
                            dueArray.push(due);
                        }
                    }
                }
        }
        if (dueArray.length > 0) {
            for (let i = 0; i < dueArray.length; i++) {
                totalDue += dueArray[i];
            }
        }
        return totalDue;
    }

    totalFineAmount() {
        const fileData = this.fileData;
        let totalFine = 0;
        let totalCollection = 0;
        for(let i = 0; i< fileData.length; i++) {
            let fine = fileData[i].fine;
            if (fine) {
                fine = parseInt(fine, 10);
                totalFine += fine;
            }
            let collection = fileData[i].collectedfine;
            if(collection) {
                collection = parseInt(collection, 10);
                totalCollection += collection;
            }
        }
        this.totalFine = totalFine;
        this.totalCollection = totalCollection;
    }

    getTotalDue() {
        const files = this.files;
        let fileData;
        let totalDue = 0;
        for (let i = 0; i < files.length; i++) {
            fileData = files[i].fileData;
            for(let j = 0; j < fileData.length; j++) {
                let fine = fileData[j].fine;
                if (fine) {
                    fine = parseInt(fine, 10);
                    let collectedfine = fileData[j].collectedfine;
                    if (!collectedfine) {
                        collectedfine = 0;
                    }
                    collectedfine = parseInt(collectedfine, 10);
                    let due = fine - collectedfine;
                    totalDue += due;
                }
            }
        }
        this.totalDue = totalDue;
    }

    currentFine() {
        this.displayFileNumber = this.latestFileNumber;
        this.displayPage();
    }
}