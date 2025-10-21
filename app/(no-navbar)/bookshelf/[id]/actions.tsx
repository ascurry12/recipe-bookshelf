"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function addBook(formData: FormData) {
  const bookshelf = getUserBookshelf();

  const supabase = await createClient();
  const data = {
    title: formData.get("title") as string,
    color: formData.get("color") as string,
    icon: formData.get("icon") as string,
  };

  const { error } = await supabase.from("books").insert({
    bookshelf_id: (await bookshelf).data.id,
    title: data.title,
    color: data.color,
    icon: data.icon,
  });
}

export async function editBook(
  formData: FormData,
  book: PostgrestResponse<any>
) {}

export async function deleteBook(book: PostgrestResponse<any>) {}

export async function getUserBookshelf() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  const bookshelf = await supabase
    .from("bookshelves")
    .select()
    .eq("user_id", user.data.user?.id)
    .single();

  return bookshelf;
}

export async function getUserInfo() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  const userInfo = await supabase
    .from("user-profiles")
    .select()
    .eq("user_id", user.data.user?.id)
    .single();

  return userInfo;
}
