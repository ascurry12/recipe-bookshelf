"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { PostgrestResponse } from "@supabase/supabase-js";
import { getBook } from "../../actions";

export async function addRecipe(bookID: string) {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  const book = await getBook(bookID);

  const { error } = await supabase.from("recipe-pages").insert({
    user_id: user.data.user?.id,
    book_id: book.data.id,
    bookshelf_id: book.data.bookshelf_id,
    title: "New Recipe",
    image: null,
    prep_time: null,
    cook_time: null,
    is_metric: false,
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  const recipe = await getNewRecipe(bookID);

  revalidatePath(`/bookshelf/${book.data.bookshelf_id}/book/${book.data.id}`);
  revalidatePath(
    `/bookshelf/${book.data.bookshelf_id}/book/${book.data.id}/recipe/${
      recipe.data?.at(0).id
    }`
  );

  redirect(
    `/bookshelf/${book.data.bookshelf_id}/book/${book.data.id}/recipe/${
      recipe.data?.at(0).id
    }`
  );
}

export async function getNewRecipe(bookID: string) {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  const recipe = await supabase
    .from("recipe-pages")
    .select("*")
    .eq("book_id", bookID)
    .order("created_at", { ascending: false })
    .limit(1);

  return recipe;
}

export async function getRecipe(recipeID: string) {
  const supabase = await createClient();

  const recipe = await supabase
    .from("recipe-pages")
    .select()
    .eq("id", recipeID)
    .single()

  return recipe;
}

export async function getRecipes(bookID: string) {
  const supabase = await createClient();

  const recipes = await supabase
    .from("recipe-pages")
    .select()
    .eq("book_id", bookID)

  return recipes;
}

