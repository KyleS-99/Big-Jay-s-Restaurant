import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ToggleService } from '../shared/toggle-modal.service';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewChecked, OnDestroy {
	private fragment: string;
	fragSub: Subscription;

	constructor(private route: ActivatedRoute, private modalService: ToggleService) { }

	ngOnInit() {
		this.fragSub = this.route.fragment.subscribe( fragment => { this.fragment = fragment; })
	}

	toggleModal(modalName: string, display: boolean) {
		this.modalService.getModal({name: modalName, display: display});
	}

	ngAfterViewChecked(): void {
		try {
			document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
			window.location.hash = "";
		  } catch (e) { }
	}

	ngOnDestroy() {
		this.fragSub.unsubscribe();
	}
}
