import { Pipe } from '@angular/core';

@Pipe({
	name: 'find'
})

export class SearchData {
	transform(pipeData) {
		const pipeModifier = 'error';
		return pipeData.filter((eachItem => {
			return eachItem['issue'].toLowerCase().includes(pipeModifier.toLowerCase())
		}))
	}
}
