import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyBAzHQekeyL_5RBLcKy9hQ09uaFBcw1JDg',
  authDomain: 'devfest17hackathon.firebaseapp.com',
  databaseURL: 'https://devfest17hackathon.firebaseio.com',
  projectId: 'devfest17hackathon',
  storageBucket: 'devfest17hackathon.appspot.com',
  messagingSenderId: '714033259243'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
