"use client"

import { addRecipe } from "@/app/(no-navbar)/bookshelf/[id]/book/[book_id]/actions";
import React from "react";
import { BiPlus } from "react-icons/bi";

interface Props {
    bookID: string
}

export default function AddRecipeButton({bookID}: Props) {
  return (
    <button
      className="btn btn-secondary"
      onClick={() => {
        addRecipe(bookID)
      }}
    >
      <BiPlus />Create new recipe
    </button>
  );
}
