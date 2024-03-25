import { Component, OnInit,inject } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { infoUsuarios } from '../models/infoUsuarios.interface';
import { Observable} from 'rxjs';

// import { AngularFirestore } from '@angular/fire/firestore'; // Importa AngularFirestore para interactuar con Firestore

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent /*implements OnInit*/ {
  private firestore: Firestore = inject(Firestore);


  $users: Observable<infoUsuarios[]>;
  constructor() {
    // get a reference to the user-profile collection
    const userProfileCollection = collection(this.firestore, 'infoUsuarios');
    // get documents (data) from the collection using collectionData
    this.$users = collectionData(userProfileCollection) as Observable<infoUsuarios[]>;}


    






  //constructor(private firestore: AngularFirestore) {} // Inyecta AngularFirestore en el constructor

  /*ngOnInit(): void {
    // Realiza una consulta a la colección de usuarios en Firestore
    this.firestore.collection('users').valueChanges().subscribe(users => {
      this.users = users; // Asigna los usuarios recuperados al array de usuarios
    });
  } */
}
