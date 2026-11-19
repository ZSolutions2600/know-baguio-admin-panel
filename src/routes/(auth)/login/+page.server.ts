import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

export const actions = {
    login: async (event) => {
        const { request, locals } = event;
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
            return fail(400, {
                message: 'Email and password are required.'
            });
        }

        const { error: err } = await locals.supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid credentials',
                    email: email,
                    invalid: true,
                    message: err.message
                });
            }
            return fail(500, {
                message: 'Server error. Try again later.'
            });
        }

        redirect(303, '/');
    },
}

 export const load = async ({ locals }) => {
    // if there is a user's session redirect back to the home page
    const { data, error } = await locals.supabase.auth.getClaims();
    if (!error && data?.claims) {
        redirect(303, '/');
    }
}