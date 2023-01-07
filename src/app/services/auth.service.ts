import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
 
  constructor( public auth: Auth ) { }

  handleRegister = (value: any) => {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
      }
    );
  };

  handleLogin = (value: any) => {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert(err.message);
      }
    );
  };


}





// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// import { GoogleAuthProvider } from "firebase/auth";
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

// import { Observable, of } from 'rxjs';
// import { switchMap, first, map } from 'rxjs/operators';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   user$: Observable<any>;

//   constructor(
//     private afAuth: AngularFireAuth,
//     private afs: AngularFirestore,
//     private router: Router
//   ) {
//     this.user$ = this.afAuth.authState.pipe(
//       switchMap(user => {
//         if (user) {
//           return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
//         } else {
//           return of(null);
//         }
//       })
//     );
//   }

//   getUser() {
//     return this.user$.pipe(first()).toPromise();
//   }

//   googleSignIn() {
//     const provider = new GoogleAuthProvider();
//     return this.oAuthLogin(provider);
//   }

//   private async oAuthLogin(provider: any) {
//     const credential = await this.afAuth.signInWithPopup(provider);
//     return this.updateUserData(credential.user);
//   }

//   private updateUserData(userCredential: { uid: any; email:any; displayName: any; photoURL: any;} | null) {
    
//     if (userCredential) {
//       const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userCredential.uid}`);

//       const data: 
//         {
//           uid: string; 
//           email: string; 
//           displayName: 
//           string; 
//           photoURL: string
//         } = userCredential;

//       return userRef.set(data, { merge: true });
//     }
//     return null;
//   }

//   async signOut() {
//     await this.afAuth.signOut();
//     return this.router.navigate(['/']);
//   }
// }