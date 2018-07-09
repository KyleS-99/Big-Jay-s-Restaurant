import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	active = false;
	constructor() { }

	ngOnInit() {
	}

	toggleMenu() {
		this.active = !this.active;
	}

	closeMobileMenu() {
		this.active = false;
	}

}
