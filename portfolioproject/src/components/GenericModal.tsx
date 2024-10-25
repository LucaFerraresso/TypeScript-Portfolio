import React from "react";
import Button from "./Button";

interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode; // Consente di passare componenti come figli
}

const GenericModal: React.FC<GenericModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-80 "
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fixed z-50">
          <Button
            onClick={onClose}
            color="bg-red-400 text-white"
            hoverColor="hover:bg-red-500"
            text="X"
          />
        </div>
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default GenericModal;
