import { Pipe } from '@angular/core';

@Pipe({
	name: 'find'
})

export class SearchData {
	transform(pipeData, query) {
        if (!query) {
            return null;
        }
		return pipeData.filter((eachItem => {
            if (eachItem['issue']) {
			    return eachItem['issue'].toLowerCase().includes(query.toLowerCase())
            }
		}))
	}
}
