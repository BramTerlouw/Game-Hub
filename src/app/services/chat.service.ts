import { Injectable, OnInit } from '@angular/core';
import { addDoc, getDocs, Firestore, collection, FieldValue, updateDoc, arrayUnion, doc } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, forkJoin, map, Observable, of, switchMap } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from '../schematics/message';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {

  public data: { id: string, username: string, message: string, timestamp: string, }[] = [];

  constructor(
    public firestore: Firestore,
    private db: AngularFirestore,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }



  /**
   * createRoom
   * * Method used to create a new chat room.
   * 
   */
  createRoom = (roomRef: string) => {
    let data: { uid: string, createdAt: number, count: number, messages: any[] };

    this.auth.getUser().then(async (user) => {
      data = {
        uid: user.uid,
        createdAt: Date.now(),
        count: 0,
        messages: []
      }

      const docRef = await this.db.collection('chats').doc(roomRef).set(data);
      this.router.navigate([`/chat/room/${roomRef}`]);

    });
  }


  /**
   * sendMessage
   * * Method used to send a message to the chat room.
   * 
   * @param chatRef Parameter for chatroom id.
   * @param message Parameter for message to send.
   * 
   */
  sendMessage = (chatRef: string, message: string) => {
    let data: { uid: string, message: string, createdAt: number };

    this.auth.getUser().then(async (user) => {
      data = {
        uid: user.uid,
        message: message,
        createdAt: Date.now()
      }

      const ref = doc(this.firestore, "chats", chatRef);

      await updateDoc(ref, {
        messages: arrayUnion(data)
      });
    });
  };



  /**
   * getMessages
   * * Method used to get the messages from the chat room.
   * 
   * @returns Returns an observable of the messages in the chat room.
   */
  getMessages = (chatRef: string) => {
    return this.db.collection('chats')
      .doc(chatRef)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  };
}