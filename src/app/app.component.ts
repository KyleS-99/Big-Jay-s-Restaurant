import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ToggleService } from './shared/toggle-modal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	name: string = '';
	display: boolean = false;
	modalSub: Subscription;

	constructor(private toggleModal: ToggleService) {}

	ngOnInit() {
		this.modalSub = this.toggleModal.modalSubject.subscribe((data) => {
			this.name = data.name;
			this.display = data.display;
		});
	}

	ngOnDestroy() {
		this.modalSub.unsubscribe();
	}
}
