import React from "react";
import Link from "next/link";
import { getBook, getUserBooks } from "../../../actions";

interface PageProps {
  params: {
    book_id: string;
  };
}

export default async function AddRecipe({ params }: PageProps) {
  const { book_id } = await params;
  const book = await getBook(book_id);

  // console.log("BOOK: ", book);

  return (
    <fieldset className="fieldset w-xs mx-auto items-center">
      <legend className="fieldset-legend">Recipe title</legend>
      <input type="text" className="input" placeholder="My awesome page" />

      <legend className="fieldset-legend">Cook time</legend>
      <input type="text" className="input" placeholder="My awesome page" />

      <legend className="fieldset-legend">Prep time</legend>
      <input type="text" className="input" placeholder="My awesome page" />

      <legend className="fieldset-legend">Ingredients</legend>
      <div className="join">
        <input
          type="text"
          className="input join-item"
          placeholder="Product name"
        />
        <button className="btn join-item">+</button>
      </div>

      <legend className="fieldset-legend">Instructions</legend>
      <div className="join">
        <input
          type="text"
          className="input join-item"
          placeholder="Product name"
        />
        <button className="btn join-item">+</button>
      </div>

      <label className="label">
        <input type="checkbox" className="checkbox" />
        Is metric
      </label>
    </fieldset>
  );
}
