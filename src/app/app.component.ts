import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'// cambiar
import { Observable } from 'rxjs'; // cambio
@Component({ // es el modelo vista controlador 
  selector: 'app-root',
  templateUrl: './app.component.html', // es nuestro temple donde ponemos nuestra vista 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('messages').valueChanges();
  }
}
