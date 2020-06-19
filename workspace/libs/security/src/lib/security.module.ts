import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthProviderDialog } from './components/auth-provider-dialog/auth-provider-dialog.component';
import { BusinessProviderService } from './business/business-provider.service';
import { FirestoreUsersRepositoryService } from './business/firestore-users-repository.service';
import { HttpService } from '@ngx-architecture/http-service';

const firebaseOptions = {
  apiKey: 'AIzaSyB1pOJXZOLaQ7LfYoXWRbi-5x-Ag7KAdao',
  authDomain: 'angular-architecture-demo.firebaseapp.com',
  databaseURL: 'https://angular-architecture-demo.firebaseio.com',
  projectId: 'angular-architecture-demo',
  storageBucket: 'angular-architecture-demo.appspot.com',
  messagingSenderId: '843006463537',
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
