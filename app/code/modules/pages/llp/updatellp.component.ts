// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/llp/partial.app.html',
  providers: [DataService]
})

// Component class
export class UpdateLLP {
    fileData: any;
    initialData: any;
	constructor(private route:ActivatedRoute, private dataService: DataService) {
    this.fileData = [];
    this.initialData = {
      empid: 'initial',
      name: 'initial',
      monday: 'initial',
      tuesday: 'initial',
      wednesday: 'initial',
      thursday: 'initial',
      friday: 'initial'
    };
		this.loadLLP();
	}

	setData(data) {
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
    }

    deleteRow(event) {
      let $button = event.target;
      let $rowNo = $button.getAttribute('data-rowno');
      $rowNo = parseInt($rowNo, 10);
      this.fileData[$rowNo].isDeleted = 'deleted';
    }

    addRow() {
      var fileLength = this.fileData.length;
      this.fileData.push(this.initialData);
    }

    saveData(event) {
      const fileData = this.fileData;
      this.dataService.saveLLPData(fileData).subscribe(data => {
          alert('file-saved');
      });
    }
}