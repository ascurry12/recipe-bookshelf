"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
export async function getUserBookshelf() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  const bookshelf = await supabase.from("bookshelves").select().eq("user_id", user.data.user?.id).single();

  return bookshelf;
}
export async function getUserInfo() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  return user;
}
