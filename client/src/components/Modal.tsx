type ModalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ modalOpen, setModalOpen }: ModalProps) {
  return (
    <div
      className={`${
        modalOpen ? 'flex' : 'hidden'
      } bg-dark-gray-1 absolute top-[30%] font-roboto-slab flex-col gap-4 p-6 z-50 mx-4 rounded-[4px] sm:max-w-sm sm:left-0 sm:right-0 sm:mx-auto sm:top-[40%]`}
    >
      <h3 className="text-white text-xl font-bold">Delete this document?</h3>
      <p className="text-light-gray-2">
        Are you sure you want to delete 'welcome.md' document and its contents?
        This action cannot be reversed.
      </p>
      <button
        className="bg-orange text-white py-2 rounded-[4px] font-roboto hover:bg-orange-hover"
        onClick={() => setModalOpen(false)}
      >
        Confirm & Delete
      </button>
    </div>
  );
}
