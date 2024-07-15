"use client";
import { useSearchParams } from "next/navigation";
import { HelpModal } from './modal-view';
import "./modal.css";

export interface ModalProps {
  setModalOpen: (arg: boolean) => void;
}

export default function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  let view;

  if (modal === 'help') {
    view = <HelpModal />;
  }
  else if (modal === 'true') {
    view = <HelpModal />;
  }

  return (
    <>
      {modal && (
        view
      )}
    </>
  );
};
