<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageProps } from './$types';

  let { form }: PageProps = $props();
  let emailInput: HTMLInputElement | undefined;
  let isSubmitting = $state(false);

  onMount(() => emailInput?.focus());
</script>

<main class="flex min-h-screen items-center justify-center">
  <div class="card card-border p-4 shadow-2xl w-max-96">
    <!-- Logo -->
    <img src="/icons/knowbaguio-logo-dark.svg" alt="Know Baguio Logo" class="mx-auto h-28 mb-1 w-auto" />

    <p class="text-2xl mb-1">Log in</p>

    <form
      class="w-80"
      action="?/login"
      method="POST"
      onsubmit={(event) => {
        isSubmitting = true;
        event.currentTarget.querySelectorAll('input').forEach((input) => input.blur())
      }}
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
        <input bind:this={emailInput} type="email" name="email" placeholder="Email" required />
      </label>
      <div class="validator-hint hidden">Enter valid email address</div>

      <!-- Password field -->
      <label class="input validator mt-1">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
            ></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          minlength="8"
          pattern={'(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'}
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
      </label>
      <p class="validator-hint hidden">
        Must be more than 8 characters, including
        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
      </p>

      <div class="mt-1 flex justify-end">
        <a href="/forgot-password" class="link link-hover text-sm">Forgot password?</a>
      </div>

      <!-- Submit button -->
      <button class="btn btn-neutral mt-4 w-80" disabled={isSubmitting}>
        {#if isSubmitting}
          <span class="loading loading-spinner"></span>
        {/if}
        Login
      </button>
    </form>

    {#if form?.message}
      <p class="mt-2 text-sm text-error" role="alert">{form.message}</p>
    {/if}
  </div>
</main>