import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthProviderDialog } from './components/auth-provider-dialog/auth-provider-dialog.component';
import { BusinessProviderService } from './business/business-provider.service';
import { FirestoreUsersRepositoryService } from './business/firestore-users-repository.service';
import { HttpService } from '@angularlicious/http-service';

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
  declarations: [AuthProviderDialog],
  exports: [AuthProviderDialog],
  entryComponents: [AuthProviderDialog],
  providers: [BusinessProviderService, FirestoreUsersRepositoryService, HttpService],
})
export class SecurityModule {}
