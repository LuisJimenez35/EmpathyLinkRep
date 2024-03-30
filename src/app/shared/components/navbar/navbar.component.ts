import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/Firebase/Auth/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { GenericFirebaseService } from '../../../services/Firebase/FirestoreDB/generic-firebase.service';
import { Observable } from 'rxjs';

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

    data: any[] | undefined;

    ngOnInit(): void {
        this.authService.user$.subscribe((user) => {
            if (user) {
                this.authService.currentUserSig.set({
                    id: user.uid,
                    email: user.email!,
                    username: user.displayName!,
                });
            } else this.authService.currentUserSig.set(null);
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

        this.genericService
            .GetOneDocument(
                'infoUsuarios',
                this.authService.currentUserSig()?.id
            )
            .subscribe({
                next: (res) => {
                    let user = {
                        ...this.authService.currentUserSig(),
                        ...res,
                    };

                    modalRef.componentInstance.user = user;
                },
            });
    }
}
