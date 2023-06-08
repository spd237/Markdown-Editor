import { useState, useContext } from 'react';
import { Switch } from '@headlessui/react';
import { DocumentType } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';
import useThemeSwitch from '../hooks/useThemeSwitch';
import sunIcon from '../assets/icon-light-mode.svg';
import moonIcon from '../assets/icon-dark-mode.svg';
import Document from './Document';
import { AuthContext } from '../App';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createDocument } from '../api/docApi';
import { useNavigate } from 'react-router-dom';

type SidebarProps = {
  sidebarOpen: boolean;
  data?: DocumentType[];
  setFileName: React.Dispatch<React.SetStateAction<string>>;
};

export default function Sidebar({
  sidebarOpen,
  data,
  setFileName,
}: SidebarProps) {
  const [theme, setTheme] = useThemeSwitch();
  const [enabled, setEnabled] = useLocalStorage('checked', false);
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const createDocumentMutation = useMutation({
    mutationFn: (token: string) => createDocument(token),
    onSuccess: () => {
      queryClient.invalidateQueries(['documents']);
    },
  });

  const handleThemeSwitch = () => {
    setEnabled(enabled === false ? true : false);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSignOut = () => {
    setToken(null);
    navigate('/signin');
  };

  return (
    <aside
      className={`fixed top-0 min-h-screen z-10 bg-dark-gray-1 p-6 flex flex-col transition-all duration-300 ${
        sidebarOpen ? 'left-0' : '-left-64'
      } `}
    >
      <h1 className="uppercase tracking-[5px] font-bold text-white lg:hidden">
        markdown
      </h1>
      <h2 className=" text-light-gray-1 uppercase tracking-[2px] text-sm my-6 lg:mt-0">
        my documents
      </h2>
      <button
        disabled={createDocumentMutation.isLoading}
        className="bg-orange text-white rounded px-11 py-3 hover:bg-orange-hover"
        onClick={() => createDocumentMutation.mutate(token ?? '')}
      >
        + New Document
      </button>
      <nav className="mt-6 flex flex-col gap-6 ">
        {data?.map((doc) => {
          return (
            <Document
              key={doc.id}
              id={doc.id}
              createdAt={doc.createdAt}
              name={doc.name}
              content={doc.content}
              setFileName={setFileName}
            />
          );
        })}
      </nav>
      <button
        className="mt-auto bg-orange text-white mb-10 rounded py-2 hover:bg-orange-hover text-lg "
        onClick={handleSignOut}
      >
        Sign Out
      </button>
      <div className="flex items-center gap-3">
        <img src={moonIcon} alt="dark-mode" />
        <Switch
          checked={enabled}
          onChange={handleThemeSwitch}
          className={
            ' relative inline-flex h-5 w-10 items-center rounded-full bg-gray'
          }
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-3 w-3 transform rounded-full bg-white transition`}
          />
        </Switch>
        <img src={sunIcon} alt="light-mode" />
      </div>
    </aside>
  );
}
