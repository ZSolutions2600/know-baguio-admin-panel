import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
  const { data, error } = await supabase.auth.getClaims()

  // If there is an error or no claims, redirect to the login page
  if (error || !data?.claims) {
    redirect(303, '/login')
  }
}