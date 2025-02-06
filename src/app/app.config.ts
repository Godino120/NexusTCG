import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"nexustcg-1d21f","appId":"1:106655086327:web:fe9284a35a373fefc005f2","databaseURL":"https://nexustcg-1d21f-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"nexustcg-1d21f.firebasestorage.app","apiKey":"AIzaSyAy9Mb-QCYzHAyGprlK_P6hjl1bofjSXYg","authDomain":"nexustcg-1d21f.firebaseapp.com","messagingSenderId":"106655086327"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase())]
};
