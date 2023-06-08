import ReactMarkdown from 'react-markdown';
import { useContext } from 'react';
import { MarkdownContext } from '../App';

type PreviewProps = {
  markdownOpen: boolean;
  setMarkdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Preview({
  markdownOpen,
  setMarkdownOpen,
}: PreviewProps) {
  const { markdownContent } = useContext(MarkdownContext);

  return (
    <section
      className={`bg:white dark:bg-almost-black h-[calc(100vh-50px)] font ${
        !markdownOpen ? 'col-span-2' : 'col-span-1'
      }`}
    >
      <div
        className="bg-almost-white dark:bg-dark-gray-1 flex
      items-center justify-between px-4 py-3"
      >
        <h2 className=" text-light-gray-1 dark:text-light-gray-2 uppercase font-medium tracking-[2px]">
          preview
        </h2>
        {markdownOpen ? (
          <svg
            width="16"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            className="group hover:cursor-pointer"
            onClick={() => setMarkdownOpen(!markdownOpen)}
          >
            <path
              d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z"
              fill="#7C8187"
              className="group-hover:fill-orange"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="group hover:cursor-pointer"
            onClick={() => setMarkdownOpen(!markdownOpen)}
          >
            <path
              d="M1.38.027a.795.795 0 0 1 .769.206L14.815 12.9a.792.792 0 0 1 0 1.124.792.792 0 0 1-1.124 0L9.234 9.567a2.77 2.77 0 0 1-3.753-3.753L1.024 1.357a.795.795 0 0 1 .357-1.33Zm.998 3.832 1.156 1.116a10.846 10.846 0 0 0-1.773 2.153c.696 1.117 2.929 4.038 6.333 3.959a6.127 6.127 0 0 0 1.346-.198l1.25 1.25a7.505 7.505 0 0 1-2.556.53h-.198c-4.663 0-7.331-4.282-7.83-5.145a.792.792 0 0 1 0-.792A12.58 12.58 0 0 1 2.378 3.86Zm5.328-2.272c4.726-.143 7.52 4.267 8.028 5.145.15.24.163.542.031.792a12.58 12.58 0 0 1-2.304 2.874l-1.195-1.116a10.846 10.846 0 0 0 1.813-2.154c-.705-1.116-2.937-4.045-6.333-3.958a6.127 6.127 0 0 0-1.346.198L5.149 2.117a7.505 7.505 0 0 1 2.557-.53Zm-.974 5.486v.055c0 .656.532 1.188 1.188 1.188l.047-.008-1.235-1.235Z"
              fill="#7C8187"
              className="group-hover:fill-orange"
            />
          </svg>
        )}
      </div>
      <ReactMarkdown
        className={`${
          !markdownOpen ? 'max-w-2xl mx-auto' : 'min-w-full'
        } font-roboto-slab  text-dark-gray-3 dark:text-light-gray-2 p-6 overflow-y-auto h-[92.5%] prose dark:prose-h1:text-white dark:prose-h2:text-white prose-h2:font-light dark:prose-h3:text-white prose-h3:text-xl dark:prose-blockquote:bg-dark-gray-2 prose-blockquote:border-l-orange prose-blockquote:text-dark-gray-3 dark:prose-blockquote:text-white prose-blockquote:not-italic prose-blockquote:font-bold prose-blockquote:font-roboto-slab prose-blockquote:p-4 prose-blockquote:bg-almost-white prose-a:text-dark-gray-3 dark:prose-a:text-white prose-a:underline dark:prose-h4:text-white prose-h4:text-lg dark:prose-h5:text-white prose-h5:font-bold prose-h5:text-base prose-h6:text-orange prose-h6:font-medium prose-code:text-dark-gray-3 dark:prose-code:text-white prose-pre:bg-almost-white dark:prose-pre:bg-dark-gray-2 prose-pre:text-lg`}
      >
        {markdownContent}
      </ReactMarkdown>
    </section>
  );
}
