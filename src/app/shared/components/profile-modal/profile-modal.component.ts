import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInterface } from '../../../models/user.interface';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.css'
})
export class ProfileModalComponent {
    activeModal = inject(NgbActiveModal);

    @Input() user: UserInterface | undefined;

    constructor() {
        console.log(this.user);
    }
}
