import { Subject } from "rxjs/Subject";

export class ToggleService {
    modalSubject = new Subject<{name: string, display: boolean}>();

    getModal(obj: {name: string, display: boolean}) {
        this.modalSubject.next(obj);
    }
}