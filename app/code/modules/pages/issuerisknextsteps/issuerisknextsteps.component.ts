import { Component } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
  templateUrl: './app/code/modules/pages/issuerisknextsteps/partial.app.html',
  providers: [DataService]
})

export class IssueRiskNextSteps {
	pageData: any;
	loggedIn: boolean;
	constructor(private dataService: DataService) {
		this.pageData = [];
		this.loadData();
		this.loggedIn = sessionStorage['token'] && sessionStorage['token'] === '9910712381';
	}
	setData(data) {
		this.pageData = data.pageData;
	}
	loadData() {
		this.dataService.getIssuesData().subscribe(data => {
			this.setData(data);
		});
	}
	dataSaved() {
		alert('data-saved');
	}
	saveData(event) {
		const target = event.target;
		let dataIndex = target.getAttribute('data-index');
		dataIndex = parseInt(dataIndex, 10);
		const selectedRow = document.querySelector('[data-rowindex=\"' + dataIndex + '\"]');
		const name = selectedRow.querySelector('[data-name="name"]').innerHTML;
		const issueType = selectedRow.querySelector('[data-name="issueType"]').innerHTML;
		const dueDate = selectedRow.querySelector('[data-name="dueDate"]').innerHTML;
		const owner = selectedRow.querySelector('[data-name="owner"]').innerHTML;
		const resolution = selectedRow.querySelector('[data-name="status"]').innerHTML;
		const rowId = this.pageData[dataIndex]._id;
		if (!rowId) {
			const updateData = {
			    issueType: issueType,
			    name: name,
			    dueDate: dueDate,
			    owner: owner
			};
			this.dataService.saveIssuesData(updateData).subscribe(data => {
		        this.dataSaved();
		    });
		} else if (rowId) {
			const updateData = {
				_id: rowId,
			    issueType: issueType,
			    name: name,
			    dueDate: dueDate,
			    owner: owner,
			    isResolved: resolution
			};
			this.dataService.updateIssuesData(updateData).subscribe(data => {
		        this.dataSaved();
		    });
		}
	}
	addData() {
		const tempData = {
			issueType: '',
		    name: '',
		    dueDate: '',
		    owner: ''
		};
		this.pageData.push(tempData);
	}
}
