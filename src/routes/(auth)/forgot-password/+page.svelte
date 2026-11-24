<script lang="ts">
    import type { PageProps } from './$types';

    let { form }: PageProps = $props();
    let isEmailValid = $state(false);
    let isSubmitting = $state(false);
</script>

<main class="flex min-h-screen items-center justify-center">
    <div class="card card-border p-4 shadow-2xl w-max-96">
        <!-- Logo -->
        <img src="/icons/knowbaguio-logo-dark.svg" alt="Know Baguio Logo" class="mx-auto h-28 mb-1 w-auto" />

        <p class="text-xl mb-1">Forgot Password</p>

        <form
            class="w-80"
            method="POST"
            onsubmit={() => (isSubmitting = true)}
        >
            <!-- Email field -->
            <label class="input validator">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                </svg>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    oninput={(event) => (isEmailValid = event.currentTarget.checkValidity())}
                />
            </label>

            <div class="validator-hint hidden">Enter valid email address</div>

            <!-- Submit button -->
            <button class="btn btn-neutral mt-4 w-80" disabled={!isEmailValid || isSubmitting}>
                {#if isSubmitting}
                    <span class="loading loading-spinner"></span>
                {/if}
                Submit
            </button>
        </form>

        {#if form?.error}
            <p class="mb-2 text-sm text-error" role="alert">{form.error}</p>
        {/if}

        <a href="/login" class="link link-hover mt-2 block text-center text-sm">Back to sign in</a>
    </div>
</main>