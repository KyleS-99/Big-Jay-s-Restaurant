import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MenuItem } from '../../shared/menu-item.model';
import { MenuItemService } from '../../shared/menu-items.service';
import { ToggleService } from '../../shared/toggle-modal.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
	animations: [
		trigger('fade', [
			transition('void => *', [
				style({
					opacity: 0,
					transform: 'translateX(100px)'
				}),
				animate(300)
			])
		])
	]
})
export class ListComponent implements OnInit {
	featuredItems: MenuItem[] = [];
	fullMenu: MenuItem[] = [];
	mobile = 3;
	up = 0;
	down = 3;
	@HostListener('window:resize', ['$event']) onResize(event) {
		if(event.target.innerWidth <= 850) {
			this.mobile = 1;
			this.down = this.up + 1;
		} else {
			if(this.down > this.featuredItems.length) {
				this.up = 0;
				this.down = 3;
				this.mobile = 3;
			} else {
				this.mobile = 3;
				this.down = this.up + 3;
			}
		}
	}
	constructor(private menuItemService: MenuItemService, private modalService: ToggleService) { }

	ngOnInit() {
		this.featuredItems = this.menuItemService.getFeaturedItems();
		if(window.innerWidth <= 850) {
			this.down = 1;
			this.mobile = 1;
		}
	}

	toggleModal(modalName: string, display: boolean) {
		this.modalService.getModal({name: modalName, display: display});
	}

	forward() {
		this.up === this.featuredItems.length - this.mobile ? this.up = 0 : this.up++;
		this.down === this.featuredItems.length ? this.down = this.mobile : this.down++;
	}

	backward() {
		this.up === 1 || this.up === 0 ? this.up = 0 : this.up--; 
		this.down === this.mobile ? this.down = this.mobile : this.down--;
	}
}
