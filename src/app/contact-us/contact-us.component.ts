import { Component, OnInit } from '@angular/core';

import { ToggleService } from '../shared/toggle-modal.service';

@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

	constructor(private modalService: ToggleService) { }

	ngOnInit() {
	}

	toggleModal(modalName: string, display: boolean) {
		this.modalService.getModal({name: modalName, display: display});
	}

}
