import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from '@tanstack/react-query';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
// import {
//   getDocument,
//   createDocument,
//   updateDocument,
//   deleteDocument,
//   getAllDocuments,
// } from './api/docApi';

function App() {
  const queryClient = useQueryClient();

  // const { isLoading, isError, error, data } = useQuery({
  //   queryKey: ['documents'],
  //   queryFn: getAllDocuments,
  // });

  // const getOneDocument = useQuery({
  //   queryKey: ['documents'],
  // });

  // const createDocumentMutation = useMutation({
  //   mutationFn: createDocument,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['documents']);
  //   },
  // });

  // const updateDocumentMutation = useMutation({
  //   mutationFn: updateDocument,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['documents']);
  //   },
  // });

  // const deleteDocumentMutation = useMutation({
  //   mutationFn: deleteDocument,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['documents']);
  //   },
  // });

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/markdown" element={<MainPage />} />
    </Routes>
  );
}

export default App;
