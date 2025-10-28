"use client";

import React, { ReactNode } from "react";
import { deleteBook } from "@/app/(no-navbar)/bookshelf/[id]/actions";

interface Props {
  bookID: string;
  title: string;
}

export default function DeleteModal({bookID, title}: Props) {
  return (
      <dialog
        id={`delete_book_modal_${bookID}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete '{title}'?
          </h3>
          <div className="modal-action">
            <form method="post" className="flex m-auto">
              <fieldset className="fieldset bg-base-100 w-xs p-2">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex items-center justify-evenly">
                  <button onClick={(() => deleteBook(bookID))} className="btn btn-neutral">
                    Yes
                  </button>
                  <button className="btn btn-neutral" formMethod="dialog">
                    No
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </dialog>
  );
}
