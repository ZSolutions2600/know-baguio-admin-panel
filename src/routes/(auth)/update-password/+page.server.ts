import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
			return fail(400, { error: 'Both password fields are required.' });
		}

		if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
			return fail(400, {
				error: 'Use at least 8 characters, including a number, a lowercase letter, and an uppercase letter.'
			});
		}

		if (password !== confirmPassword) {
			return fail(400, { error: 'Passwords do not match.' });
		}

		const { error } = await supabase.auth.updateUser({ password });

		if (error) {
			return fail(400, { error: error.message });
		}

		redirect(303, '/');
	}
};