import { useState } from 'react';
import { Switch } from '@headlessui/react';
import fileIcon from '../assets/icon-document.svg';
import sunIcon from '../assets/icon-light-mode.svg';
import moonIcon from '../assets/icon-dark-mode.svg';

export default function Sidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
  const [enabled, setEnabled] = useState(false);
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
      <button className="bg-orange text-white rounded px-11 py-3 hover:bg-orange-hover">
        + New Document
      </button>
      <nav className="mt-6 flex flex-col gap-6 ">
        <div className="flex items-center gap-4">
          <img src={fileIcon} alt="file-icon" />
          <div className="flex flex-col">
            <span className="text-light-gray-1">01 April 2022</span>
            <span className="text-white">untitled-document.md</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={fileIcon} alt="file-icon" />
          <div className="flex flex-col">
            <span className="text-light-gray-1">01 April 2022</span>
            <span className="text-white">welcome.md</span>
          </div>
        </div>
      </nav>
      <div className="mt-auto flex items-center gap-3">
        <img src={moonIcon} alt="dark-mode" />
        <Switch
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
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
