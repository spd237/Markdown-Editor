export interface User {
  id: string;
  username: string;
  password: string;
  documents: Document[];
}

export interface Document {
  id: string;
  name: string;
  createdAt: string;
  content?: string;
  authorID: string;
  author: User;
}

export type UserData = {
  username: string;
  password: string;
};
