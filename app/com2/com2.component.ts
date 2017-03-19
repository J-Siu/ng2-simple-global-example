import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
	selector: 'app-com2',
	templateUrl: './com2.component.html',
	styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {

	constructor(private sg: SimpleGlobal) { }
	ngOnInit() {
	}

}
