<script lang="ts">
    import type { PageProps } from './$types';

    let { form }: PageProps = $props();
    let password = $state('');
    let confirmPassword = $state('');
    let isSubmitting = $state(false);
    let isPasswordValid = $derived(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password));
    let passwordsMatch = $derived(password.length > 0 && password === confirmPassword);
</script>

<main class="flex min-h-screen items-center justify-center">
    <div class="card card-border p-4 shadow-2xl w-max-96">
        <img src="/icons/knowbaguio-logo-dark.svg" alt="Know Baguio Logo" class="mx-auto h-28 mb-1 w-auto" />

        <p class="text-xl mb-1">Update password</p>
        <p class="mb-3 text-sm">Choose a new password for your account.</p>

        <form
            class="w-80"
            method="POST"
            onsubmit={() => (isSubmitting = true)}
        >
            <label class="input validator">
                <input
                    type="password"
                    name="password"
                    placeholder="New password"
                    autocomplete="new-password"
                    minlength="8"
                    pattern={'(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'}
                    title="Use at least 8 characters, including a number, a lowercase letter, and an uppercase letter."
                    required
                    bind:value={password}
                />
            </label>
            <div class="validator-hint hidden">
                Use at least 8 characters, including a number, a lowercase letter, and an uppercase letter.
            </div>

            <label class="input validator mt-2">
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    autocomplete="new-password"
                    required
                    bind:value={confirmPassword}
                />
            </label>
            {#if confirmPassword && !passwordsMatch}
                <p class="mt-1 text-sm text-error" role="alert">Passwords do not match.</p>
            {/if}

            <button
                class="btn btn-neutral mt-4 w-80"
                disabled={!isPasswordValid || !passwordsMatch || isSubmitting}
            >
                {#if isSubmitting}
                    <span class="loading loading-spinner"></span>
                {/if}
                Update password
            </button>
        </form>

        {#if form?.error}
            <p class="mt-2 text-sm text-error" role="alert">{form.error}</p>
        {/if}

        <a href="/login" class="link link-hover mt-2 block text-center text-sm">Back to sign in</a>
    </div>
</main>
