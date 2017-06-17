import { Component } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
  templateUrl: './app/code/modules/pages/issuerisknextsteps/partial.app.html',
  providers: [DataService]
})

export class IssueRiskNextSteps {
	issuesData: any;
	nextStepsData: any;
	loggedIn: boolean;
	constructor(private dataService: DataService) {
		this.issuesData = [];
		this.nextStepsData = [];
		this.loadData();
		this.loggedIn = sessionStorage['token'] && sessionStorage['token'] === '9910712381';
	}
	setData(data) {
		this.issuesData = data.issuesData;
		this.nextStepsData = data.nextStepsData;
	}
	loadData() {
		this.dataService.getIssuesData().subscribe(data => {
			this.setData(data);
		});
	}
	dataSaved() {
		alert('data-saved');
	}
	saveData() {
		const testData = {
		    issueType: 'issues-risk',
		    name: 'Create update page',
		    dueDate: '01-07-2017',
		    owner: 'Sintu'
		};
		this.dataService.saveIssuesData(testData).subscribe(data => {
	        this.dataSaved();
	    });
	}
	updateData(event) {
    }
  }
}
