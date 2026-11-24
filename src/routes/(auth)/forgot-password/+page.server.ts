import { fail, redirect } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export const actions = {
    default: async ({ request, locals: { supabase }, url }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;

        const redirectTo = new URL('/auth/confirm', url.origin);
        redirectTo.searchParams.set('next', '/update-password');

        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: redirectTo.toString(),
        });

        if (error) {
            if (error instanceof AuthApiError && error.status === 400) {
                return fail(400, {
                    error: "invalidCredentials",
                    email: email,
                    invalid: true,
                    message: error.message,
                });
            }

            return fail(500, {
                error: "Server error. Please try again later.",
            });
        }

        redirect(303, "/check-email");
    },
}