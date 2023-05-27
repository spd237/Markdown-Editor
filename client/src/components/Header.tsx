import fileIcon from '../assets/icon-document.svg';
import saveIcon from '../assets/icon-save.svg';

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-dark-gray-2 text-white relative flex items-center p-2 justify-between h-14 md:h-[72px]">
      <div>
        <button
          className="absolute w-14 h-14 left-0 top-0 bg-dark-gray-3 hover:bg-orange md:h-[72px] md:w-[72px]"
          onClick={(e) => {
            e.currentTarget.classList.toggle('toggle-menu');
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <div
            className="relative left-4 bg-white w-6 h-[2px] transition-all duration-300 md:left-6  before:content-[''] before:bg-white before:h-[2px] before:w-6 before:absolute before:-translate-x-3 before:-translate-y-2 before:transition-all before:duration-300 after:content-[''] after:bg-white after:h-[2px] after:w-6 after:absolute after:translate-y-2
          after:-translate-x-3 after:transition-all after:duration-300"
          ></div>
        </button>
        <div className="flex items-center gap-14 ml-16 md:ml-24 ">
          <h1 className="hidden lg:block uppercase font-bold tracking-[5px] ">
            markdown
          </h1>
          <div className="flex relative items-center gap-4 before:absolute before:content-[''] before:w-[1px] before:h-10 before:bg-gray before:-left-7 before:hidden lg:before:block">
            <img src={fileIcon} alt="file-icon" />
            <div className="flex flex-col">
              <label
                htmlFor="doc-name"
                className="hidden md:block text-light-gray-1 text-sm"
              >
                Document Name
              </label>
              <input
                type="text"
                name="doc-name"
                id="doc-name"
                value={'welcome.md'}
                className=" bg-transparent outline-none caret-orange"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button>
          <svg
            width="18"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
              fill="#7C8187"
              className=" group-hover:fill-orange"
            />
          </svg>
        </button>
        <button className="bg-orange p-3 rounded hover:bg-orange-hover flex items-center gap-3">
          <img src={saveIcon} alt="save-icon" />
          <span className="hidden md:block">Save Changes</span>
        </button>
      </div>
    </header>
  );
}
