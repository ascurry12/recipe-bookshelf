import RecipePageComponent from "@/components/recipePage";
import React from "react";
import { getRecipe } from "../../actions";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
    book_id: string;
    recipe_id: string;
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { id, book_id, recipe_id } = await params;
  const recipe = await getRecipe(recipe_id);

  console.log(recipe);
  return (
    <div>
      <Link
        href={`/bookshelf/${id}/book/${book_id}`}
        className="hover:bg-black rounded-full justify-start w-xs"
      >
        <img
          src="/images/circle-arrow-left-solid-full.svg"
          className="w-10"
        ></img>
      </Link>
      <p>
        {recipe.data.title} {recipe_id}
      </p>
      <RecipePageComponent params={params} />
    </div>
  );
}
