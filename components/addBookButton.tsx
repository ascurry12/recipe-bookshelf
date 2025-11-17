"use client";

import React, { ReactNode } from "react";
import { BiPlus } from "react-icons/bi";

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
      <BiPlus />Create new book
    </button>
  );
}
