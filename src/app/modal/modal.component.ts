import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItemService } from '../shared/menu-items.service';
import { MenuItem } from '../shared/menu-item.model';
import { ToggleService } from '../shared/toggle-modal.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	animations: [
		trigger('fade', [
			transition('* <=> void', [
				style({
					opacity: 0,
					transform: 'translateX(-50%)'
				}),
				animate(150)
			])
		])
	]
})
export class ModalComponent implements OnInit {
	state = "";
	menuItems: MenuItem[];
	dessert: MenuItem[];
	width = 25;

	@HostListener('window:resize', ['$event']) onResize(event) {
		this.width = window.innerWidth/18 >= 81 ? this.width = 60 : window.innerWidth/18;
	}

	constructor(private menuItemsService: MenuItemService, private modalService: ToggleService) { }

	ngOnInit() {
		this.menuItems = this.menuItemsService.getFeaturedItems();
		this.dessert = this.menuItemsService.getDessert();
		this.width = window.innerWidth/18 >= 81 ? this.width = 60 : window.innerWidth/18;
	}

	closeModal() {
		this.modalService.getModal({name: '', display: false});
	}
}
