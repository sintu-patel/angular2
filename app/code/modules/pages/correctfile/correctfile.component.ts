// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params
import { labelConfig } from '../../../config/app.labels';

@Component({
  templateUrl: './app/code/modules/pages/correctfile/partial.app.html',
  providers: [DataService]
})

// Component class
export class CorrectFile {
  fileData: any;
  initialData: any;
 // error model
  modelData: any;
  isModelOpen: any;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
    this.fileData = [];
    this.initialData = {
      empid: 'initial',
      name: 'initial',
      fine: 'initial',
      currency: 'initial',
      collectedfine: 'initial'
    };
    // error model
    this.modelData =  null;
    this.isModelOpen = false;
		this.loadFineList();
	}

	setData(data) {
		if (data.fileData && data.fileData.length) {
      this.fileData = data.fileData;
    }
    if (!data.fileData || !data.fileData.length) {
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
  }

  deleteRow(event) {
    let $button = event.target;
    let $rowNo = $button.getAttribute('data-rowno');
    $rowNo = parseInt($rowNo, 10);
    this.fileData[$rowNo].isDeleted = 'deleted';
  }

  saveData(event) {
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
      description: 'Data saved successfully. Please click on correct errors'
    };
    this.openModel(modelData);
  }
  addRow() {
    var fileLength = this.fileData.length;
    this.fileData.push(this.initialData);
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