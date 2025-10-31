"use client";

import React, { ReactNode } from "react";

interface Props {
  modalID: string;
  color: string;
}

export default function BookActionButton({modalID, color}: Props) {
  return (
    <button
      className={`btn btn-ghost border-transparent btn-xs ${color}`}
      onClick={() => {
        const bookActionModal = document.getElementById(
          modalID
        ) as HTMLDialogElement;
        bookActionModal.showModal();
      }}
    >
      {modalID.includes("edit_book_modal") ? "Edit" : "Delete"}

      
    </button>
  );
}
