import { Pipe } from '@angular/core';

@Pipe({
	name: 'trimstring'
})

export class TrimString {
	transform(pipeData) {
        if (!pipeData) {
            return 'No data';
        }
		return pipeData.substring(0, 50) + '...';
	}
}
