import { AuthorStatus } from './author-status.enum';
import { User } from '@ngx-architecture/lms-common';

export class Author {
  bio: string;
  blog: string;
  dateCreated: Date;
  dateUpdated: Date;
  id: number;
  instagram: string;
  photoUrl: string;
  status: AuthorStatus.NotSet;
  twitter: string;
  user?: User;
  userId: string;
  web: string;
}
