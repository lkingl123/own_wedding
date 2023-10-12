import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IRSVP } from 'src/app/models/rsvp.model';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FirebaseProvider {
  item$: Observable<any[]>;
  constructor(private firestore: Firestore) { }

  addRSVP(rsvp: IRSVP, isKL:boolean) {
    const rsvpRef = collection(this.firestore, isKL?'rsvp':'rsvp-jb'); 
    return addDoc(rsvpRef, rsvp);
  }

  getRSVPs(isKL:boolean): Observable<IRSVP[]> {
    const rsvpRef = collection(this.firestore, isKL?'rsvp':'rsvp-jb');
    return collectionData(rsvpRef, { idField: 'id' }) as Observable<IRSVP[]>;
  }
  // getDocRef(docPath: string){
  //   return this.db.doc(docPath);
  // }

  // getCollectionRef(collectionPath: string) {
  //   return this.db.collection(collectionPath);
  // }
}
