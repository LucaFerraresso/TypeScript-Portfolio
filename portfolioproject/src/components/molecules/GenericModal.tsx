import React from "react";

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
      className="min-h-[100vh] fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-80"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg z-50 flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default GenericModal;
