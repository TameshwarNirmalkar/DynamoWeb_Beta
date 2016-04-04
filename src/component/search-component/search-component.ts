import {Component, Inject}               from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS} from 'angular2/router';
import {SearchService} from '../../services/search/search.service';
import {NgFor, NgIf} from 'angular2/common';

@Component({
	selector: 'search-component',
	templateUrl: 'dist/component/search-component/search-component.html',
	directives: [NgFor, NgIf],
    providers: [SearchService]
})

export class SearchComponent {
	assetsList: Array<Object>;
	singleList: Object;

	constructor(public _SearchList: SearchService) {
		_SearchList.getAssetsList().map(res => res.json()).subscribe(assetsdata => {
			this.assetsList = assetsdata.assets;
		});
    }

    getanassets(e:Object, id:Number){
		console.log('loading');
		this._SearchList.getAnAsset(id).map(res => res.json()).subscribe(a => {
			this.singleList = a;
			console.log('loading.... done');
		});
		console.log("List generator:", this.singleList);
    }

    hack(val) {
		return Array.from(val);
	}
}