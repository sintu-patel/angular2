import { Pipe } from '@angular/core';

@Pipe({
	name: 'find'
})

export class SearchData {
	transform(pipeData:any, query:any) {
        if (!query) {
            return null;
        }
		return pipeData.filter(((eachItem:any) => {
            if (eachItem['issue']) {
			    return eachItem['issue'].toLowerCase().includes(query.toLowerCase())
            }
		}))
	}
}
