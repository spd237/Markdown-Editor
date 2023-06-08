import axios from 'axios';
import { DocumentType, UserData } from '../types';

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

export const getAllDocuments = async (
  token: string | null
): Promise<DocumentType[]> => {
  const response = await docApi.get('/markdown', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
};

export const getDocument = async (
  id: string | undefined,
  token: string | null
): Promise<DocumentType> => {
  const res = await docApi.get(`/markdown/${id}`, {
    data: id,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
};

export const createDocument = async (token: string) => {
  return await docApi.post('/markdown', null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateDocumentName = async (
  id: string | undefined,
  fileName: string,
  token: string | null
): Promise<DocumentType> => {
  return await docApi.put(
    `/markdown/${id}`,
    { name: fileName },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const updateDocumentContent = async (
  id: string | undefined,
  content: string,
  token: string | null
): Promise<DocumentType> => {
  return await docApi.put(
    `/markdown/${id}`,
    { content: content },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const deleteDocument = async (
  id: string | undefined,
  token: string | null
) => {
  return await docApi.delete(`/markdown/${id}`, {
    data: { id: id },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default docApi;
