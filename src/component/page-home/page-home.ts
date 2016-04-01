// Libraries
import {Component} from 'angular2/core';
import {SliderComponent}  from '../slider-component/slider-component';

@Component({
    templateUrl  : 'dist/component/page-home/page-home.html',
    directives: [SliderComponent]
})
export class HomePageComponent { }