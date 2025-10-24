"use client";

import React, { ReactNode } from "react";

export default function AddBookButton() {
  return (
    <button
      className="w-fit btn btn-secondary"
      onClick={() => {
        const addBookModal = document.getElementById(
          "add_book_modal"
        ) as HTMLDialogElement;
        addBookModal.showModal();
      }}
    >
      + Create new book
    </button>
  );
}
