import { Injectable, inject } from '@angular/core';
import {
    DocumentReference,
    Firestore,
    collection,
    collectionData,
    doc,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { infoUsuarios } from '../models/infoUsuarios.interface';

@Injectable({
    providedIn: 'root',
})
export class FavoritesService {
    private firestore: Firestore = inject(Firestore);
    private infoUsuarioCollection = collection(this.firestore, 'infoUsuarios');

    doc: DocumentReference;
    //users$: infoUsuarios[];

    constructor() {
        // get a reference to the user-profile collection
        const userProfileCollection = collection(this.firestore, 'users');
        this.doc = doc(this.firestore, 'foo/1');
    }

    /* getFavorites(userId: string): Observable<infoUsuarios[]> {
        this.item$ = collectionData(itemCollection);
     } */

    /* getFavorites(userId: string): Observable<FavoriteRestaurant[]> {
        let q = query(this.favoriteRestaurantCollection, where('userId', '==', userId));
        return new Observable<FavoriteRestaurant[]>((observer) => {
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const favorites: FavoriteRestaurant[] = [];
                querySnapshot.forEach((doc) => {
                    favorites.push({ fsq_id: doc.data()['fsq_id'], userId: doc.data()['userId'] });
                });
                observer.next(favorites);
            });
            return () => unsubscribe();
        }).pipe(
            map((restaurantesFavoritos) => {
                return restaurantesFavoritos;
            })
        );
    }

    async addToFavoriteRestaurants(favoriteRestaurant: FavoriteRestaurant) {
        return addDoc(this.favoriteRestaurantCollection, favoriteRestaurant);
    } */
}
