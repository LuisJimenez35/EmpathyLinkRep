import { Injectable, inject } from '@angular/core';
import {
    Firestore,
    addDoc,
    collection,
    collectionData,
    DocumentReference,
    DocumentSnapshot,
    doc,
    docData,
    setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GenericFirebaseService {
    private firestore: Firestore = inject(Firestore);

    GetAllDocuments(collectionName: string) {
        const collectionRef = collection(this.firestore, collectionName);

        return collectionData(collectionRef) as Observable<any[]>;
    }

    GetOneDocument(collectionName: string, documentId: any) {
        let documentRef = doc(
            this.firestore,
            collectionName + '/' + documentId
        );
        return docData(documentRef);
    }

    AddDocument(collectionName: string, documentId: string, data: any) {
        const docRef = doc(this.firestore, collectionName, documentId);

        return setDoc(docRef, data)
            .then(() => {
                // El documento se ha creado correctamente
                return documentId; // Devolvemos el ID del documento creado
            })
            .catch((err) => {
                // Manejar cualquier error
                throw err;
            });
    }

    /* const collectionRef = collection(this.firestore, collectionName);

        addDoc(collectionRef, <any>{ data })
            .then((documentReference: DocumentReference) => {
                // the documentReference provides access to the newly created document
                return documentReference.id;
            })
            .catch((err) => {
                return err;
            }); */

    UpdateDocument(collectionName: string, documentId: any, data: any) {
        const collectionRef = collection(this.firestore, collectionName);

        return collectionData(collectionRef) as Observable<any[]>;
    }

    DeleteDOcument(collectionName: string, documentId: any) {
        const collectionRef = collection(this.firestore, collectionName);

        //deleteDoc(collectionRef, )
        //return collectionData(collectionRef) as Observable<any[]>;
    }
}
