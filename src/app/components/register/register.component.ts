import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Firebase/Auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../../shared/components/error-modal/error-modal.component';
import { GenericFirebaseService } from '../../services/Firebase/FirestoreDB/generic-firebase.service';
import { UserInfo } from '@angular/fire/auth';
import { UserInfoInterface } from '../../models/user.interface';
// Importa el componente de modal de error

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    standalone: true,
    imports: [ReactiveFormsModule],
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    fb = inject(FormBuilder);
    http = inject(HttpClient);
    authService = inject(AuthService);
    router = inject(Router);
    genericService = inject(GenericFirebaseService);

    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        address: ['', Validators.required],
        cellphone: ['', Validators.required],
    });

    constructor(private modalService: NgbModal) {} // Inyecta NgbModal en el constructor

    onSubmit(): void {
        const rawForm = this.form.getRawValue();
        console.log(rawForm);
        this.authService
            .register(rawForm.email, rawForm.username, rawForm.password)
            .subscribe({
                next: (newUserId) => {
                    let userData: UserInfoInterface = {
                        address: rawForm.address,
                        cellphone: rawForm.cellphone,
                        fullName: rawForm.username,
                        role: 'User',
                    };

                    // Se inserta el resto de la informacion del usuario creado en firebase
                    this.genericService.AddDocument(
                        'infoUsuarios',
                        newUserId,
                        userData
                    );

                    this.router.navigateByUrl('/login');
                },
                error: (err) => {
                    this.openErrorModal(err.code); // Abre el modal de error
                },
            });
    }

    openErrorModal(errorMessage: string): void {
        const modalRef = this.modalService.open(ErrorModalComponent); // Abre el modal de error
        modalRef.componentInstance.errorMessage = errorMessage; // Pasa el mensaje de error al componente de modal
    }
}
