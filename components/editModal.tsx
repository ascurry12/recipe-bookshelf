"use client";

import React, { ReactNode } from "react";
import { editBook } from "@/app/(no-navbar)/bookshelf/[id]/actions";

interface Props {
  bookID: string;
  title: string;
  color: string;
  icon: string;
}

export default function EditModal({ bookID, title, color, icon }: Props) {
  const editBookWithID = editBook.bind(null, bookID);
  return (
    <dialog
      id={`edit_book_modal_${bookID}`}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit '{title}'</h3>
        <div className="modal-action">
          <form method="post" className="flex m-auto">
            <fieldset className="fieldset bg-base-100 border-base-200 rounded-box w-xs border p-4">
              <label htmlFor="title" className="label">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="input"
                placeholder="Title"
                defaultValue={title}
              />
              <label htmlFor="color" className="label">
                Color
              </label>
              <select
                defaultValue={color}
                id="color"
                name="color"
                className="select"
              >
                <option disabled={true} value="">
                  Pick a color
                </option>
                <optgroup className="max-h-60 overflow-y-auto">
                  <option value="default">Default</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="indigo">Indigo</option>
                  <option value="violet">Violet</option>
                  <option value="turquoise">Turquoise</option>
                  <option value="pink">Pink</option>
               </optgroup>
              </select>

              <label htmlFor="icon" className="label">
                Icon
              </label>
              <select
                defaultValue={icon}
                id="icon"
                name="icon"
                className="select"
              >
                <option disabled={true} value="">
                  Pick an icon
                </option>

                <optgroup className="max-h-60 overflow-y-auto">
                  <option value="book">Book</option>
                  <option value="cake">Cake</option>
                  <option value="carrot">Carrot</option>
                  <option value="cat">Cat</option>
                  <option value="cheese">Cheese</option>
                  <option value="dog">Dog</option>
                  <option value="icecream">Ice Cream</option>
                  <option value="paw">Paw</option>
                  <option value="pizza">Pizza</option>
                  <option value="snowflake">Snowflake</option>
                </optgroup>
              </select>
              {/* if there is a button in form, it will close the modal */}
              <div className="flex items-center justify-evenly">
                <button className="btn btn-neutral mt-4" formMethod="dialog">
                  Cancel
                </button>
                <button
                  formAction={editBookWithID}
                  className="btn btn-secondary mt-4"
                >
                  Edit Book
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </dialog>
  );
}
