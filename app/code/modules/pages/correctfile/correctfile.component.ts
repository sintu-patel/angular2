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
          alert('file-saved');
      });
    }
}