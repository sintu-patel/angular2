// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params
import { apiConfig } from '../../../config/app.config';

@Component({
  templateUrl: './partial.app.html',
  providers: [DataService]
})

// Component class
export class UpdateLLP {
    fileData: any;
    initialData: any;
    // error model
    modelData: any;
    isModelOpen: any;
    loggedIn: boolean;
    today: number;
    dayArray: any;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
    this.fileData = [];
    this.initialData = {
      empid: 'TBD',
      name: 'TBD',
      monday: 'TBD',
      tuesday: 'TBD',
      wednesday: 'TBD',
      thursday: 'TBD',
      friday: 'TBD'
    };
    this.dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    // error model
    this.modelData =  null;
    this.isModelOpen = false;
    this.loggedIn = true; // TBD
    const date = new Date();
    this.today = date.getDay();
		this.loadLLP();
	}

	setData(data:any) {
    if (data.fileData && data.fileData.length) {
      this.fileData = data.fileData;
    }
    if (!data.fileData || !data.fileData.length) {
      this.fileData.push(this.initialData);
    }
	}

   loadLLP() {
		this.dataService.getLLPData().subscribe(data => {
			this.setData(data);
		});
	}

  updateData(event:any) {
    let $input = event.target;
    let $inputValue = $input.value;
    let $colName = $input.name;
    let $rowNo = $input.getAttribute('data-rowno');
    $rowNo = parseInt($rowNo, 10);
    switch ($colName) {
      case "name":
        this.fileData[$rowNo].name = $inputValue;
        break;
      case "monday":
        this.fileData[$rowNo].monday = $inputValue;
        break;
      case "tuesday":
        this.fileData[$rowNo].tuesday = $inputValue;
        break;
      case "wednesday":
        this.fileData[$rowNo].wednesday = $inputValue;
        break;
      case "thursday":
        this.fileData[$rowNo].thursday = $inputValue;
        break;
      case "friday":
        this.fileData[$rowNo].friday = $inputValue;
        break;
      default:
        break;
    }
    this.saveDataForOneRow(this.fileData[$rowNo]);
  }

  saveDataForOneRow(fileData:any) {
    var fileArray:any = [];
    fileArray.push(fileData);
    this.dataService.saveLLPData(fileArray).subscribe(data => {
        this.fileSaved();
        this.loadLLP();
    });
  }

  deleteRow(event:any) {
    let $button = event.target;
    let $rowNo = $button.getAttribute('data-rowno');
    $rowNo = parseInt($rowNo, 10);
    this.fileData[$rowNo].isDeleted = 'deleted';
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

  saveData() {
    const fileData = this.fileData;
    this.dataService.saveLLPData(fileData).subscribe(data => {
        this.fileSaved();
        this.loadLLP();
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
  }
  openModel(data:any) {
    this.modelData = data;
    this.isModelOpen = true;
  }
  closeModel() {
    this.modelData = null;
    this.isModelOpen = false;
  }
  getTodayClass(dayName:any) {
    if (this.dayArray[this.today] === dayName) {
      return 'today';
    } else {
      return 'not-today';
    }
  }
  disableLLPInput(dayName:any) {
    const columnDayNumber = this.dayArray.indexOf(dayName);
    if (columnDayNumber >= this.today) {
      return false;
    } else {
      return true;
    }
  }
}