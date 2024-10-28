import { BookOpenIcon, ImageIcon } from "lucide-react";
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

  // Funzione per controllare se children è un'immagine
  const isImageChild = React.Children.toArray(children).some((child) => {
    return React.isValidElement(child) && child.type === "img";
  });

  return (
    <div
      className="min-h-[100vh] fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-20 "
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg z-50 flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 className="text-xl font-bold mb-4 flex flex-row gap-4 justify-center items-center">
            {isImageChild ? (
              <ImageIcon color="black" size={25} />
            ) : (
              <BookOpenIcon color="black" size={25} />
            )}
            {title}
          </h2>
        )}

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default GenericModal;
