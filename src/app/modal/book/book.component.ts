import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ToggleService } from '../../shared/toggle-modal.service';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.scss'],
	animations: [
		trigger('fade', [
			transition('* <=> void', [
				style({
					opacity: 0,
					transform: 'translateX(-50%)'
				}),
				animate(150)
			])
		]),
		trigger('fadeOut', [
			state('in', style({
				opacity: 1
			})),
			state('out', style({
				opacity: 0,
				display: 'none'
			})),
			transition('in <=> out', animate(300))
		]),
		trigger('submitted', [
			state('default', style({
				opacity: 0,
				display: 'none'
			})),
			state('display', style({
				opacity: 1,
				display: 'block'
			})),
			transition('default <=> display', animate(600))
		])
	]
})
export class BookComponent implements OnInit {
	avaTime = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
	default = this.avaTime[8];
	display = "in";
	submitted = "default"
	storeData;
	sub = false;

	constructor(private modalService: ToggleService) { }

	ngOnInit() {
	}

	closeModal() {
		this.modalService.getModal({name: '', display: false});
	}

	onSubmit(data) {
		this.display = "out";
		this.submitted = "display";
		this.storeData = data.value;
		this.sub = true;
	}

}
