import { Component } from '@angular/core';

@Component({
    selector: 'app-error-modal',
    standalone: true,
    imports: [],
    templateUrl: './error-modal.component.html',
    styleUrl: './error-modal.component.css',
})
export class ErrorModalComponent {
    errorMessage: string;

    constructor(/* Aquí van los inyectables u otras dependencias */) {
        this.errorMessage = ''; // Inicialización en el constructor
    }
}
