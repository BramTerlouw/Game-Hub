import { Injectable, OnInit } from '@angular/core';
import { addDoc, getDocs, Firestore, collection } from '@angular/fire/firestore';
import {BehaviorSubject, map, Observable} from 'rxjs';

import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService2 implements OnInit {

  public data: { id: string, username: string, message: string, timestamp: string, }[] = [];

  constructor(public firestore: Firestore, private db: AngularFirestore) {}

  ngOnInit() {

  }

  public createMessage = (value: any) => {
    const dbInstance = collection(this.firestore, 'chats');

    addDoc(dbInstance, value)
      .catch((err) => {
        alert(err.message);
      })
  };

  getMessages = async () => {
    const snapshot = await getDocs(collection(this.firestore, 'chats'));

    snapshot.forEach((doc) => {
      this.data.push({
        id: doc.id,
        username: doc.data()['username'],
        message: doc.data()['message'],
        timestamp: doc.data()['timestamp'],
      });
    });

    return this.data;
  };

  // fetchLive = () => {
  //   onSnapshot(collection(this.firestore, 'chats'), (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     });
  //   });
  // };
}