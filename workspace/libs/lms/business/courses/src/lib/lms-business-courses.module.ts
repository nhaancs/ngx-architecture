import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '@angularlicious/http-service';
import { BusinessProviderService } from './business/business-provider.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreCourseRepositoryService } from './business/firestore-course-repository.service';

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
  exports: [],
  providers: [BusinessProviderService, FirestoreCourseRepositoryService, HttpService],
})
export class LmsBusinessCoursesModule {}
