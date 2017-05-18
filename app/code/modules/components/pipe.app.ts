import { Pipe } from '@angular/core';

@Pipe({
	name: 'trimstring'
})

export class TrimString {
	transform(pipeData) {
		return pipeData.substring(0, 50) + '...';
	}
}
