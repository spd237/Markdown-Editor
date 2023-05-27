import axios from 'axios';
import { Document } from '../types';

type UserData = {
  username: string;
  password: string;
};

const API_URL = 'http://localhost:3000';

const docApi = axios.create({
  baseURL: API_URL,
});

export const signIn = async ({ username, password }: UserData) => {
  return await docApi.post('/signin', {
    username: username,
    password: password,
  });
};

export const signUp = async ({ username, password }: UserData) => {
  return await docApi.post('/signup', {
    username: username,
    password: password,
  });
};

export const getAllDocuments = async () => {
  const response = await docApi.get('/markdown');
  return response.data;
};

export const getDocument = async (doc: Document) => {
  const res = await docApi.get(`/markdown/${doc.id}`);
  return res.data;
};

export const createDocument = async (doc: Document) => {
  return await docApi.post('/markdown', doc);
};

export const updateDocument = async (doc: Document) => {
  return await docApi.put(`/markdown/${doc.id}`, doc);
};

export const deleteDocument = async (doc: Document) => {
  return await docApi.delete(`/todos${doc.id}`, { data: { id: doc.id } });
};

export default docApi;
