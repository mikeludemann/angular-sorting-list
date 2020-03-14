import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-sorting-list';

	dataList = [
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Mary Watson" },
		{ id: 3, name: "Dave Beck" },
		{ id: 4, name: "Brooke Tyson" }
	];
}
