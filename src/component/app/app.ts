// Libraries
import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// Custom Components
import {NavigationComponent} from '../navigation/navigation';
import {HomePageComponent}   from '../page-home/page-home';
import {AboutPageComponent}  from '../page-about/page-about';
import {TopHeader}  from '../topheader/topheader';
import {RegisterComponent}  from '../register-component/register-component';
import {SignInComponent}  from '../sign-in-component/sign-in-component';


@Component({
	selector    : 'my-app',
	templateUrl : 'dist/component/app/app.html',
	directives: [TopHeader, ROUTER_DIRECTIVES]
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
	}

])
export class AppComponent { }