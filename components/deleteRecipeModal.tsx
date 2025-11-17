"use client";

import React, { ReactNode } from "react";
import { deleteRecipe } from "@/app/(no-navbar)/bookshelf/[id]/book/[book_id]/actions";

interface Props {
  recipeID: string;
  title: string;
}

export default function DeleteRecipeModal({ recipeID, title }: Props) {
  return (
    <dialog
      id={`delete_recipe_modal_${recipeID}`}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Are you sure you want to delete '{title} {recipeID}'?
        </h3>
        <div className="modal-action">
          <form action={deleteRecipe} className="flex m-auto">
            <input type="hidden" name="recipeID" value={recipeID} />
            <fieldset className="fieldset bg-base-100 w-xs p-2">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex items-center justify-evenly">
                <button className="btn btn-neutral" formMethod="dialog">
                  Cancel
                </button>
                <button type="submit" className="btn btn-error">
                  Delete
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </dialog>
  );
}
