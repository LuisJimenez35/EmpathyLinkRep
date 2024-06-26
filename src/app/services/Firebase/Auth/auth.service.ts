import { Injectable, inject, signal } from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    user,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { AuthUserInterface } from '../../../models/user.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    firebaseAuth = inject(Auth);
    user$ = user(this.firebaseAuth);
    currentUserSig = signal<AuthUserInterface | null | undefined>(undefined);

    register(
        email: string,
        username: string,
        password: string
    ): Observable<any> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then((response: any) => {
            return updateProfile(response.user, { displayName: username }).then(
                () => response.user.uid
            );
        });

        return from(promise);
    }

    login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(() => {});
        return from(promise);
    }

    logout(): Observable<void> {
        const promise = signOut(this.firebaseAuth);
        return from(promise);
    }
}
