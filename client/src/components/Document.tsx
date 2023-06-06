import { Link } from 'react-router-dom';
import fileIcon from '../assets/icon-document.svg';
import { DateTime } from 'luxon';

type DocumentProps = {
  id: string;
  createdAt: string;
  name: string;
  content?: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
};

export default function Document({
  id,
  createdAt,
  name,
  content,
  setFileName,
}: DocumentProps) {
  const date = DateTime.fromISO(createdAt)
    .setLocale('en-GB')
    .toFormat('dd MMMM yyyy');

  return (
    <Link
      to={`/markdown/${id}`}
      className="flex items-center gap-4"
      onClick={() => {
        setFileName(`${name}`);
      }}
    >
      <img src={fileIcon} alt="file-icon" />
      <div className="flex flex-col items-start">
        <span className="text-light-gray-1">{date}</span>
        <span className="text-white ">{`${name}`}</span>
      </div>
    </Link>
  );
}
