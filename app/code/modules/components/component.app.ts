import { Component } from '@angular/core';
import { DATA } from './server/data-main';
console.log(DATA);

@Component({
  selector: 'app',
  templateUrl: './app/code/modules/components/partial.app.html'
})

export class AppComponent {
	information: string;
	DATA: any; // use any for complex data type (i.e. json)
	constructor() {
		this.information = "faltu";
		this.DATA = DATA.data;
	}
}
