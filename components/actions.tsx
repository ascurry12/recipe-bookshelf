'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { User } from '@supabase/supabase-js'

interface Bookshelf {
      id: number;
      title: string;
      user_id: string;
    }

export async function getBookshelf(user: User | null) {
    const supabase = await createClient();
    if (user) {
      const { data, error } = await supabase
        .from("bookshelves")
        .select()
        .eq("user_id", user.id);
  
      if (data && data[0]) {
          return data[0];
      }
    }
}

export async function logout() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error signing out:', error.message)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}


