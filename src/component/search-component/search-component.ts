import {Component, Inject}               from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {SearchService} from '../../services/search/search.service';
import {NgFor, NgIf, NgClass} from 'angular2/common';

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
	public asset_id: String;
	//public router: Router;
	

	constructor(public _SearchList: SearchService, public params: RouteParams, private router: Router) {
		_SearchList.getAssetsList().map(res => res.json()).subscribe(assetsdata => {
			this.assetsList = assetsdata.assets;
			console.log(this.params.get('asset_id'));
			this.asset_id = this.params.get('asset_id');
			this.getanassets(this.asset_id);
		});
	}

	getanassets(id:String){
		console.log(this.params.get('asset_id'));
		this._SearchList.getAnAsset(id).map(res => res.json()).subscribe(a => {
			this.singleList = a;
		});
	}

	isRouteActive(route) {
		return this.router.isRouteActive(this.router.generate(route));
	}
}