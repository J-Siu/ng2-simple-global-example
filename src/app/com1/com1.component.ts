import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
	selector: 'app-com1',
	templateUrl: './com1.component.html',
	styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {

	constructor(private sg: SimpleGlobal) { }
	ngOnInit() {
	}

}
