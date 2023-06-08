import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { deleteDocument } from '../api/docApi';

type ModalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
};

export default function Modal({
  modalOpen,
  setModalOpen,
  fileName,
  setFileName,
}: ModalProps) {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteDocumentMutation = useMutation({
    mutationFn: ({
      id,
      token,
    }: {
      id: string | undefined;
      token: string | null;
    }) => deleteDocument(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries(['documents']);
      navigate('/markdown');
    },
  });

  const handleDocumentDelete = () => {
    setFileName('');
    setModalOpen(false);
    deleteDocumentMutation.mutate({ id: id, token: token });
  };

  return (
    <div
      className={`${
        modalOpen ? 'flex' : 'hidden'
      } bg-dark-gray-1 absolute top-[30%] font-roboto-slab flex-col gap-4 p-6 z-50 mx-4 rounded-[4px] sm:max-w-sm sm:left-0 sm:right-0 sm:mx-auto sm:top-[40%]`}
    >
      <h3 className="text-white text-xl font-bold">Delete this document?</h3>
      <p className="text-light-gray-2">
        {`Are you sure you want to delete '${fileName}' document and its contents?
        This action cannot be reversed.`}
      </p>
      <button
        disabled={deleteDocumentMutation.isLoading}
        className="bg-orange text-white py-2 rounded-[4px] font-roboto hover:bg-orange-hover"
        onClick={handleDocumentDelete}
      >
        Confirm & Delete
      </button>
    </div>
  );
}
