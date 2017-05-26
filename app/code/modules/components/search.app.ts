import { Pipe } from '@angular/core';

@Pipe({
	name: 'find'
})

export class SearchData {
	transform(pipeData, query) {
		query = query || 'error';
		return pipeData.filter((eachItem => {
			return eachItem['issue'].toLowerCase().includes(query.toLowerCase())
		}))
	}
}
