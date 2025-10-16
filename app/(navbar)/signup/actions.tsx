"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

async function createUser(user: User) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookshelves")
    .select()
    .eq("user_id", user.id);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  if (user && user.user_metadata && user.user_metadata.display_name && data && data[0]) {

    const { error } = await supabase.from("user-profiles").insert({
      display_name: user.user_metadata.display_name,
      user_id: user.id,
      bookshelf_id: data[0].id,
    });

    if (error) {
      console.log(error);
      redirect("/error");
    }
  }
}

async function createBookshelf(user: User) {
  const supabase = await createClient();

  // add to bookshelf table
  if (user && user.user_metadata && user.user_metadata.display_name) {
    const { error } = await supabase.from("bookshelves").insert({
      title: `${user.user_metadata.display_name}'s Bookshelf`,
      user_id: user.id,
    });

    if (error) {
      console.log(error);
      redirect("/error");
    }

    createUser(user);
  }
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        display_name: formData.get("display-name") as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    createBookshelf(user);
  }

  revalidatePath("/", "layout");
  redirect("/");
}
