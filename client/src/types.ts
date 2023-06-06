export interface User {
  id: string;
  username: string;
  password: string;
  documents: Document[];
}

export interface DocumentType {
  id: string;
  name: string;
  createdAt: string;
  content?: string;
  authorID: string;
  author: User;
}

export interface UserData {
  username: string;
  password: string;
}
