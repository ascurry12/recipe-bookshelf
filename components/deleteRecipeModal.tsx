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
        <div className="modal-action flex justify-evenly">
          <button
            type="button"
            className="btn btn-neutral"
            onClick={() => {
              const dialog = document.getElementById(
                `delete_recipe_modal_${recipeID}`
              ) as HTMLDialogElement;
              dialog.close();
            }}
          >
            Cancel
          </button>

          <form action={deleteRecipe} className="inline">
            <input type="hidden" name="recipeID" value={recipeID} />
            <button type="submit" className="btn btn-error">
              Delete
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
