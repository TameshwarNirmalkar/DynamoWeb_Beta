import {Component, Inject}               from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {NgFor, NgIf, NgClass} from 'angular2/common';

import {SearchService} from '../../services/search/search.service';
import {OrderBy} from "../../pipes/orderBy/orderBy"


@Component({
	selector: 'search-component',
	templateUrl: 'dist/component/search-component/search-component.html',
	directives: [NgFor, NgIf, ROUTER_DIRECTIVES],
	providers: [SearchService],
	pipes: [OrderBy]
})

export class SearchComponent {
	private assetsList: Array<Object>;
	private singleList: Object;
	private asset_id: String;
	private platform: String;

	constructor(private _SearchList: SearchService, public params: RouteParams, private router: Router) {
		_SearchList.getAssetsList().map(res => res.json()).subscribe(assetsdata => {
			this.assetsList = assetsdata.assets;
			this.platform = this.params.get('platform');
			this.asset_id = this.params.get('asset_id');
			if (this.asset_id !== null){
			 	this.getanassets(this.asset_id);
			}
		});
	}

	getanassets(id: String) {
		this._SearchList.getAnAsset(id).map(res => res.json()).subscribe(a => {
			this.singleList = a;
		});
	}
	
	isRouteActive(route) {
		return this.router.isRouteActive(this.router.generate(route));
	}

	getPlatform(){
		return this.platform;
	}
}