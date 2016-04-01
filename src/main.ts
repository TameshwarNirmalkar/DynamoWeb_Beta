// Libraries
import {bootstrap}        from 'angular2/platform/browser'
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { bind } from "angular2/core";

// Custom Components
import {AppComponent}     from './component/app/app'

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);