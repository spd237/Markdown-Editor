import { useState } from 'react';
import Header from './components/Header';
import Markdown from './components/Markdown';
import Modal from './components/Modal';
import Preview from './components/Preview';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [markdownOpen, setPreviewOpen] = useState(false);
  const [markdownInput, setMarkdownInput] = useState('');

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} />
      <div
        className={`fixed w-full  transition-all duration-300 overflow-y-hidden ${
          sidebarOpen ? 'overflow-x-hidden translate-x-64' : ''
        }`}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grid grid-cols-2">
          <Markdown
            markdownInput={markdownInput}
            setMarkdownInput={setMarkdownInput}
            markdownOpen={markdownOpen}
            setMarkdownOpen={setPreviewOpen}
          />
          <Preview
            markdownInput={markdownInput}
            markdownOpen={markdownOpen}
            setMarkdownOpen={setPreviewOpen}
          />
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

export default App;
