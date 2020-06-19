import { Roles } from './roles.model';
import * as firebase from 'firebase';

export class User implements firebase.UserInfo {
  phoneNumber: string;
  providerId: string;
  // dateCreated: Date;
  // dateUpdated: Date;
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  roles: Roles;

  static toRequest(data): any {
    let model: any = {};
    model.phoneNumber = data.phoneNumber;
    model.providerId = data.providerData[0].uid;
    model.displayName = data.displayName;
    model.email = data.email;
    model.photoURL = data.photoURL;
    model.uid = data.uid;
    // model.roles = new Roles()
    // model.roles.isSubscriber = true
    return model;
  }
}
