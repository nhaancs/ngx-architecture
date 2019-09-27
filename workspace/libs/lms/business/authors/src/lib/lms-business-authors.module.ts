import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '@angularlicious/http-service';
import { BusinessProviderService } from './business/business-provider.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreAuthorsRepositoryService } from './business/firestore-authors-repository.service';

const firebaseOptions = {
  apiKey: 'YOUR-GOOGLE-API-KEY-HERE',
  authDomain: 'AUTH-DOMAIN-HERE',
  databaseURL: 'FIREBASE-DATABASE-URL',
  projectId: 'FIREBASE-PROJECT-ID-HERE',
  storageBucket: 'FIREBASE-STORAGE-BUCKET',
  messagingSenderId: '',
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseOptions),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [],
  providers: [BusinessProviderService, FirestoreAuthorsRepositoryService, HttpService],
})
export class LmsBusinessAuthorsModule {}
