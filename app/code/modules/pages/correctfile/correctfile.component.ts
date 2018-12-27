// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params
import { labelConfig } from '../../../config/app.labels';
import { apiConfig } from '../../../config/app.config';

@Component({
  templateUrl: './partial.app.html',
  providers: [DataService]
})

// Component class
export class CorrectFile {
  fileData: any;
  initialData: any;
  files: any;
  latestFile: any;
  displayFileNumber: number;
  totalFiles: number;
 // error model
  modelData: any;
  isModelOpen: any;
  loggedIn: boolean;
  latestFileNumber: number;
  llpCloseDate: any;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
    this.fileData = [];
    this.initialData = {
      empid: 'TBD',
      name: 'TBD',
      fine: 'TBD',
      currency: 'TBD',
      collectedfine: 'TBD'
    };
    // error model
    this.modelData =  null;
    this.isModelOpen = false;
    this.files = [];
    this.latestFile = [];
    this.loggedIn = sessionStorage['token'] && sessionStorage['token'] === '9910712381';
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
    if (!this.fileData || !this.fileData.length) {
      this.fileData.push(this.initialData);
    }
	}

  displayPage() {
      this.fileData = this.files[this.displayFileNumber].fileData;
      this.llpCloseDate = this.files[this.displayFileNumber].llpCloseDate;
  }

   loadFineList() {
		this.dataService.getFineData().subscribe(data => {
			this.setData(data);
		});
	}

  updateData(event) {
    let $input = event.target;
    let $inputValue = $input.value;
    let $colName = $input.name;
    let $rowNo = $input.getAttribute('data-rowno');
    $rowNo = parseInt($rowNo, 10);
    switch ($colName) {
      case "name":
        this.fileData[$rowNo].name = $inputValue;
        break;
      case "fine":
        this.fileData[$rowNo].fine = $inputValue;
        break;
     case "currency":
      this.fileData[$rowNo].currency = $inputValue;
      break;
      case "collectedfine":
      this.fileData[$rowNo].collectedfine = $inputValue;
      break;
      default:
        break;
    }
    let dbAction = 'update-row';
    if (!this.fileData[$rowNo]._id) {
      dbAction = 'add-row';
    }
    const singleRowUpdateinFile = {
      fileId: this.files[this.displayFileNumber]._id,
      fileNumber: this.displayFileNumber,
      rowData: this.fileData[$rowNo],
      rowNumber: $rowNo,
      dbAction: dbAction
    }
    this.saveDataForOneRow(singleRowUpdateinFile);
  }

  saveDataForOneRow(singleRowUpdateinFile) {
    this.dataService.saveFileData(singleRowUpdateinFile).subscribe(data => {
        this.fileSaved();
    });
  }

  deleteRow(event) {
    let $button = event.target;
    let $rowNo = $button.getAttribute('data-rowno');
    $rowNo = parseInt($rowNo, 10);
    this.fileData[$rowNo].isDeleted = 'deleted';
    this.updateData(event);
  }
  dataNotSaved() {
    let modelData = {
      showCloseButton: true,
      heading: 'Error',
      description: 'Data not saved'
    };
    this.openModel(modelData);
  }
  fileSaved() {
    let modelData = {
      showCloseButton: true,
      heading: 'File saved',
      description: 'Data saved successfully.'
    };
    this.openModel(modelData);
  }
   addRow() {
    var fileLength = this.fileData.length;
    if (this.fileData[fileLength - 1].name !== 'TBD') {
      this.fileData.push(this.initialData);
    } else {
      let modelData = {
        showCloseButton: true,
        heading: 'Error1',
        description: 'Please save data to the last row first'
      };
      this.openModel(modelData);
    }
  }
  openModel(data) {
    this.modelData = data;
    this.isModelOpen = true;
  }
  closeModel() {
    this.modelData = null;
    this.isModelOpen = false;
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

  isFieldInputDisabled(isDeleted) {
    if(!this.loggedIn) {
      return true;
    }
  }

  currentFine() {
      this.displayFileNumber = this.latestFileNumber;
      this.displayPage();
  }
}