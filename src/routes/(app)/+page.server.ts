import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	logout: async (event) => {
		const supabase = event.locals.supabase;
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.error('Error signing out:', error.message);
		}

		redirect(303, '/login');
	}
};