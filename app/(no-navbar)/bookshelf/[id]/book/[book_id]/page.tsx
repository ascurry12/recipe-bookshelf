import React from "react";
import AddBookButton from "@/components/addBookButton";
import Link from "next/link";
import { getBook } from "../../actions";
import { getRecipes } from "./actions";
import AddRecipeButton from "@/components/addRecipeButton";

interface PageProps {
  params: {
    id: string;
    book_id: string;
  };
}

export default async function BookPage({ params }: PageProps) {
  const { id, book_id } = await params;
  const book = await getBook(book_id);
  const recipes = await getRecipes(book_id);
  const recipeData = recipes.data;
  console.log(recipes);

  return (
    <>
      <Link
        href={`/bookshelf/${id}`}
        className="hover:bg-black rounded-full justify-start w-xs"
      >
        <img
          src="/images/circle-arrow-left-solid-full.svg"
          className="w-10"
        ></img>
      </Link>
      <div className="lg:w-6xl mx-auto text-center">
        <h1 className="text-2xl font-bold">{book.data.title}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-6 mt-10 mb-10">
          {recipes.data?.length != null && recipes.data?.length > 0 ? (
            recipeData?.map((recipe) => {
              return (
                <Link
                  href={`/bookshelf/${book.data.bookshelf_id}/book/${book.data.id}/recipe/${recipe.id}`}
                  key={recipe.id}
                >
                  {recipe.title}
                </Link>
              );
            })
          ) : (
            <p>No Recipes</p>
          )}
        </div>

        <AddRecipeButton bookID={book_id} />
      </div>
    </>
  );
}
