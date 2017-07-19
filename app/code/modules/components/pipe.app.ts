import { Pipe } from '@angular/core';

@Pipe({
	name: 'trimstring'
})

export class TrimString {
	transform(pipeData) {
        if (!pipeData) {
            return 'No data';
        }
        if (pipeData.length > 500) {
			return pipeData.substring(0, 500) + '...';
		} else {
			return pipeData;
		}
	}
}
