import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { getAuth, provideAuth  } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC07-l5bGPNSKTxiPfn-JeBR_-a5uBQLlE",
  authDomain: "empathylinkdb1-0.firebaseapp.com",
  projectId: "empathylinkdb1-0",
  storageBucket: "empathylinkdb1-0.appspot.com",
  messagingSenderId: "98425988466",
  appId: "1:98425988466:web:1c3084bf39bf4f19ba69eb",
  measurementId: "G-P25KXH83S9"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
