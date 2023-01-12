import { Injectable } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { 
  AngularFirestore, 
  AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { 
  firstValueFrom, 
  Observable, 
  switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<any>;

  constructor(
    private auth: Auth,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.user$ = afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
          return [];
        })
    )
  }

  /**
   * getUser
   * * Method used to get the user data from firebase.
   * 
   * @returns The user data from firebase.
   * 
   */
  getUser = async () => {
    return await firstValueFrom(this.user$);
  };



  /**
   * signUp
   * * Method used to create a new user in firebase.
   * 
   * @param value Parameter object containing email and password.
   *  
   */
  signUp = async (value: any) => {
    createUserWithEmailAndPassword(this.auth, value.email, value.password).then((res) => {
      this.updateUserData(
        {
          uid: res.user.uid, 
          email: value.email, 
          password: value.password, 
          displayName: value.displayName
        });
    })
      .catch((err) => {
        alert(err.message);
      }
    );
  };



  /**
   * updateUserData
   * * Method used to update the user data in the database.
   * 
   * @param user_Data Parameter object containing uid, email, password and displayName.
   * @returns The userRef that has been added to firebase.
   * 
   */
  updateUserData = (user_Data: {uid: string; email: string; password: string; displayName: string}) => {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user_Data.uid}`);
    return userRef.set(user_Data, { merge: true });
  };



  /**
   * signIn
   * * Method used to login to firebase.
   * 
   * @param value Parameter with email and password. 
   * @returns The data from the logged in user.
   * 
   */
  signIn = (value: any) => {
    return signInWithEmailAndPassword(this.auth, value.email, value.password);
  };



  /**
   * signOut
   * * Method used to logout from firebase.
   * 
   */
  signOut = async () => {
    await this.auth.signOut();
    this.router.navigate(['/auth']);
  };
}
