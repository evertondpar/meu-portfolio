"use client";

import { useEffect, useRef } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal(); // Abre o modal nativo com fundo escuro (backdrop)
    } else {
      if (dialog.open) dialog.close(); // Fecha o modal
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose} // Disparado se o utilizador fechar a apertar a tecla ESC
      className="bg-white text-white p-8 rounded-2xl max-w-100vw backdrop:bg-black/80 backdrop:backdrop-blur-sm border border-zinc-800 shadow-2xl open:animate-fade-in self-center m-auto "
    >
      {/* Botão de Fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black font-bold hover:text-zinc-600 cursor-pointer text-xl"
      >
        ✕
      </button>

      {/* Conteúdo dinâmico do modal */}
      {children}
    </dialog>
  );
}
