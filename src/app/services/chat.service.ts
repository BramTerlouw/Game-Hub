import { Injectable, OnInit } from '@angular/core';
import { addDoc, getDocs, Firestore, collection } from '@angular/fire/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from '../schematics/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService2 implements OnInit {

  public data: { id: string, username: string, message: string, timestamp: string, }[] = [];

  constructor(public firestore: Firestore, private db: AngularFirestore) { }

  ngOnInit() {

  }

  public createMessage = (value: any) => {
    const dbInstance = collection(this.firestore, 'chats');

    addDoc(dbInstance, value)
      .catch((err) => {
        alert(err.message);
      })
  };

  getMessages = () => {
    return this.db.collection<Message>('chats', ref => ref.orderBy('timestamp', 'asc'))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data() as Message;
            const id = action.payload.doc.id;

            return { id, ...data }
          })
        })
      )
  };
}