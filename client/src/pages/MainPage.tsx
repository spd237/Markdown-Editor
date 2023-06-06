import Header from '../components/Header';
import Modal from '../components/Modal';
import Sidebar from '../components/Sidebar';
import { useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllDocuments, updateDocumentName } from '../api/docApi';
import { useState, useEffect } from 'react';
import { AuthContext } from '../App';
import Content from '../components/Content';
import { useParams } from 'react-router-dom';

export default function MainPage() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileName, setFileName] = useState('');

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['documents', token],
    queryFn: () => {
      if (!token) {
        throw new Error('Unauthorized');
      } else return getAllDocuments(token);
    },
  });

  // const updateNameMutation = useMutation({
  //   mutationFn: ({
  //     id,
  //     fileName,
  //     token,
  //   }: {
  //     id: string;
  //     fileName: string;
  //     token: string;
  //   }) => updateDocumentName(id, fileName, token),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['documents']);
  //   },
  // });

  return (
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        data={data}
        setFileName={setFileName}
      />
      <div
        className={`fixed w-full  transition-all duration-300 overflow-y-hidden ${
          sidebarOpen ? 'overflow-x-hidden translate-x-64' : ''
        }`}
      >
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          fileName={fileName}
          setFileName={setFileName}
        />
        <main className="grid grid-cols-2 ">
          <Content />
        </main>
      </div>
      <div
        className={`fixed top-0 z-10  h-screen w-[100%] items-center justify-center bg-light-gray-2/50 ${
          modalOpen ? 'flex' : 'hidden'
        }`}
      ></div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}
