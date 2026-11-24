<script lang="ts">
    import { page } from '$app/state';

    let errorMessage = $derived(
        page.url.searchParams.get('message') ??
            page.url.searchParams.get('error_description') ??
            page.url.searchParams.get('error')
    );
</script>

<main class="flex min-h-screen items-center justify-center">
    <div class="card card-border p-4 shadow-2xl w-max-96 text-center">
        <img src="/icons/knowbaguio-logo-dark.svg" alt="Know Baguio Logo" class="mx-auto h-28 mb-1 w-auto" />

        <h1 class="text-2xl mb-2">We couldn't verify this link</h1>

        {#if errorMessage}
            <p class="mb-2 text-sm" role="alert">{errorMessage}</p>
        {/if}

        <!-- <p class="mb-2 text-sm">
            The link may be invalid, expired, or already used. If you're resetting your password,
            request a new link and open the latest email.
        </p> -->

        <a href="/forgot-password" class="btn btn-neutral mt-4">Request a new reset link</a>
        <a href="/login" class="link link-hover mt-4 text-sm">Back to sign in</a>
    </div>
</main>
