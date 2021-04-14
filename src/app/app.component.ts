import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'// cambiar
import {AngularFireAuth} from '@angular/fire/auth'
import firebase from 'firebase/app'

import { Observable } from 'rxjs'; // cambio
import { logging } from 'selenium-webdriver';
@Component({ // es el modelo vista controlador 
  selector: 'app-root',
  templateUrl: './app.component.html', // es nuestro temple donde ponemos nuestra vista 
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Observable<any[]>;// items es de tipo observable any 
  user: any;
  formValue: any;

  constructor(public firestore: AngularFirestore, public auth: AngularFireAuth) { // auth queda publico
    const query = firestore.collection("messages", ref  => {
      return ref.orderBy("createdAt").limitToLast(30);
    });
    this.items = query.valueChanges(); // valueChanges = es el observador
    this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  sendMessage() {
    
    this.auth.user.subscribe((user) => {
      this.firestore.collection("messages").add({
        text: this.formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      });
      this.formValue = '';
    });
    
   
  }

  signIn() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  signOut() {
    this.auth.signOut();
    this.user = null;
  }
}
