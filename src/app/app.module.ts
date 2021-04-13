import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire'

import { AppComponent } from './app.component';



const firebase = {
  apiKey: "AIzaSyAjSmXTsJwbdM2dWiFJCKqFfBXWkwSn6DM",
  authDomain: "sofkachat-motta.firebaseapp.com",
  projectId: "sofkachat-motta",
  storageBucket: "sofkachat-motta.appspot.com",
  messagingSenderId: "661924347522",
  appId: "1:661924347522:web:16296cc65f8d5d328dfe9b"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
