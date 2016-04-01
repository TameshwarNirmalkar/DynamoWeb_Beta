import {Component, Inject}               from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS} from 'angular2/router';
import {SearchService} from '../../services/search/search.service';
import {NgFor} from 'angular2/common';

@Component({
	selector: 'search-component',
	templateUrl: 'dist/component/search-component/search-component.html',
	directives: [NgFor],
    providers: [SearchService]
})

export class SearchComponent {
	assetsList: Array<Object>; 
	constructor(private _SearchList: SearchService) {
		_SearchList.getAssetsList().map(res => res.json()).subscribe(assetsdata => {
			this.assetsList = assetsdata.assets;
		});
    }
}