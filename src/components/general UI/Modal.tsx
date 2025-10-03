
import React from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="fixed inset-0  bg-opacity-50 z-50 flex justify-center overflow-y-scroll">
      <div onClick={e => e.stopPropagation()} className="bg-[#6c6c6c] h-auto py-8 px-4 rounded-lg w-full max-w-4/5 my-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-10 text-xl font-bold cursor-pointer  text-white"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
