<main class="flex min-h-screen items-center justify-center">
    <div class="card card-border p-4 shadow-2xl w-3xl check-email-card">
        <!-- Logo -->
        <img src="/icons/knowbaguio-logo-dark.svg" alt="Know Baguio Logo" class="mx-auto h-28 mb-1 w-auto" />

        <p class="text-2xl mb-1">Check your email</p>

        <p class="mx-auto mb-2 text-sm check-email-message" role="status">
            If an account exists for that email address, we've sent password reset instructions.
            Check your inbox and spam or junk folder, then follow the link in the email to choose a
            new password.
        </p>

        <div class="mt-4 flex items-center justify-center gap-4">
            <a href="/login" class="btn btn-neutral">Back to sign in</a>
            <a href="/forgot-password" class="link link-hover text-sm">Use a different email</a>
        </div>
    </div>
</main>

<style>
    .check-email-card p {
        text-align: center;
    }

    .check-email-message {
        max-width: 80ch;
        margin-inline: auto;
    }
</style>