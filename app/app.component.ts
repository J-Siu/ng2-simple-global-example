import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Angular2 Simple Global Variable';

	constructor(private sg: SimpleGlobal) { }

	ngOnInit() {
		this.sg['placeholder'] = 'This is a global variable';
	}
}
