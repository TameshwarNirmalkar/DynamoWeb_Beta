import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'search-component',
	templateUrl: 'dist/component/search-component/search-component.html'
})

export class SearchComponent { 

	constructor(){
		console.log('Search component initalize');
	}
}