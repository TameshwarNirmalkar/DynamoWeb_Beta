// Libraries
import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NgIf} from 'angular2/common';

// Custom Components
import {NavigationComponent} from '../navigation/navigation';
import {HomePageComponent}   from '../page-home/page-home';
import {AboutPageComponent}  from '../page-about/page-about';
import {TopHeader}  from '../topheader/topheader';
import { FooterComponent } from '../footer/footer';
import {RegisterComponent}  from '../register-component/register-component';
import {SignInComponent}  from '../sign-in-component/sign-in-component';
import {SearchComponent}  from '../search-component/search-component';
//import { SingleAssetComponent } from '../asset-component/single-asset-component';

@Component({
	selector    : 'my-app',
	templateUrl : 'dist/component/app/app.html',
	directives: [TopHeader, FooterComponent, ROUTER_DIRECTIVES, NgIf]
})
@RouteConfig([
	{   
		path      : '/',
		name      : 'Home',
		component : HomePageComponent
	},
	{ 
		path      : '/about',
		name      : 'About',
		component : AboutPageComponent
	},
	{
		path: '/register',
		name: 'Register',
		component: RegisterComponent
	},
	{
		path: '/signin',
		name: 'SignIn',
		component: SignInComponent
	},
	{
		path: '/search',
		name: 'Search',
		component: SearchComponent
	}
])

export class AppComponent { 
	private platform: String = "Web";


	constructor(){
		console.log('app initiated.', this.platform);
	}

}