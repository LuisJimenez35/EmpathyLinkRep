import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/Firebase/Auth/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { GenericFirebaseService } from '../../../services/Firebase/FirestoreDB/generic-firebase.service';
import { Observable, of, switchMap } from 'rxjs';
import { UserInterface } from '../../../models/user.interface';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    modalService = inject(NgbModal);
    authService = inject(AuthService);
    router = inject(Router);
    genericService = inject(GenericFirebaseService);

    userData: UserInterface | null = null;

    ngOnInit(): void {
        this.authService.user$.subscribe((user) => {
            if (user) {
                this.genericService
                    .GetOneDocument('infoUsuarios', user.uid)
                    .subscribe((res: any) => {
                        if (res) {
                            this.userData = {
                                id: user.uid,
                                email: user.email!,
                                username: user.displayName!,
                                address: res.address,
                                cellphone: res.cellphone,
                                fullName: res.fullName,
                            };
                        } else {
                            this.userData = {
                                id: user.uid,
                                email: user.email!,
                                username: user.displayName!,
                                address: '',
                                cellphone: '',
                                fullName: '',
                            };
                        }
                    });
            } else {
                this.userData = null;
            }
        });
    }

    logout(): void {
        this.router.navigateByUrl('/login');
        this.authService.logout();
    }

    openUserProfileModal(): void {
        const modalRef = this.modalService.open(ProfileModalComponent, {
            size: 'sm',
        });

        modalRef.componentInstance.user = this.userData;
    }
}
