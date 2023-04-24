import { useRef, useEffect } from "react";

const AddDescModal = ({ onCloseModal, titleRef, decValue }) => {
  const modalTitleContainer = useRef();
  const descContainer = useRef();
  useEffect(() => {
    modalTitleContainer.current.value = titleRef.current.value;
    descContainer.current.value = decValue;
  }, [titleRef, decValue]);

  const closeModalHandler = () => {
    titleRef.current.value = modalTitleContainer.current.value;
    onCloseModal(descContainer.current.value);
  };

  return (
    <div
      onClick={closeModalHandler}
      className="bg-black bg-opacity-30 fixed top-0 right-0 w-full h-full flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative duration-500 bg-[#25273D] rounded-md p-6 mx-2 min-w-[450px]`}
      >
        <div className="w-full flex flex-col gap-y-6">
          <div className="flex flex-col items-start justify-center gap-y-2 text-white">
            <span className="text-2xl">Title</span>
            <input
              className="w-full bg-transparent border rounded-md px-2 py-1 text-xl"
              ref={modalTitleContainer}
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-y-2 text-white">
            <span className="text-2xl">Description</span>
            <textarea
              ref={descContainer}
              className="w-full bg-transparent border rounded-md px-2 py-1 text-lg min-h-[100px] max-h-[200px]"
            />
          </div>
          <button
            onClick={closeModalHandler}
            className="bg-blue-700 text-white w-fit px-6 py-1 rounded-md border-2 border-blue-700 hover:bg-transparent duration-200"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDescModal;
