// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params
import { labelConfig } from '../../../config/app.labels';
import { apiConfig } from '../../../config/app.config';

@Component({
  templateUrl: './app/code/modules/pages/correctfile/partial.app.html',
  providers: [DataService]
})

// Component class
export class CorrectFile {
  fileData: any;
  initialData: any;
  files: any;
  latestFile: any;
 // error model
  modelData: any;
  isModelOpen: any;
  loggedIn: boolean;
  latestFileNumber: number;
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
    const fileCount = this.files && this.files.length;
    this.latestFileNumber = fileCount - 1;
    this.latestFile = this.files[this.latestFileNumber];
    this.fileData = this.latestFile.fileData;
    if (!this.fileData || !this.fileData.length) {
      this.fileData.push(this.initialData);
    }
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
    const singleRowUpdateinFile = {
      fileId: this.latestFile._id,
      fileNumber: this.latestFileNumber,
      rowData: this.fileData[$rowNo],
      rowNumber: $rowNo,
      dataType: 'single-row-in-file'
    }
    this.saveDataForOneRow(singleRowUpdateinFile);
  }

  saveDataForOneRow(singleRowUpdateinFile) {
    this.dataService.saveFileData(singleRowUpdateinFile).subscribe(data => {
        this.fileSaved();
        this.loadFineList();
    });
  }

  deleteRow(event) {
    let $button = event.target;
    let $rowNo = $button.getAttribute('data-rowno');
    $rowNo = parseInt($rowNo, 10);
    this.fileData[$rowNo].isDeleted = 'deleted';
  }

  saveData() {
    const fileData = this.fileData;
    this.dataService.saveFileData(fileData).subscribe(data => {
       this.fileSaved();
    });
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
    this.loadFineList();
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
}