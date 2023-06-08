import Header from '../components/Header';
import Modal from '../components/Modal';
import Sidebar from '../components/Sidebar';
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllDocuments } from '../api/docApi';
import { useState } from 'react';
import { AuthContext } from '../App';
import Content from '../components/Content';

export default function MainPage() {
  const { token } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileName, setFileName] = useState('');

  const { data } = useQuery({
    queryKey: ['documents', token],
    queryFn: () => {
      if (!token) {
        throw new Error('Unauthorized');
      } else return getAllDocuments(token);
    },
  });

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
          setModalOpen={setModalOpen}
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
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        fileName={fileName}
        setFileName={setFileName}
      />
    </>
  );
}
