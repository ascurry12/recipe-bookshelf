import RecipePageComponent from "@/components/recipePage";
import React from "react";
import { getRecipe } from "../../actions";
import Link from "next/link";
import { getUserInfo } from "../../../../actions";

interface PageProps {
  params: {
    id: string;
    book_id: string;
    recipe_id: string;
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { id, book_id, recipe_id } = await params;
  const user = await getUserInfo();
  const userData = user.data;

  const recipe = await getRecipe(recipe_id);
  const recipeData = recipe.data;

  return (
    <>
      {/* 
                Hidden edit functionality:
                    Title
                    Authored by {user}
                    Image
                    Prep Time | Cook Time
                    Ingredients
                    Steps
                Unhidden:
                    FORMS !!!
            */}
      <RecipePageComponent recipeData={recipeData} userData={userData} />
    </>
  );
}
