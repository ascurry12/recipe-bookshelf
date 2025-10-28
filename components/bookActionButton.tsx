"use client";

import React, { ReactNode } from "react";

interface Props {
  modalID: string;
}

export default function BookActionButton({modalID}: Props) {
  return (
    <button
      className="btn btn-xs"
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
