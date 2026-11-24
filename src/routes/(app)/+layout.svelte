<script lang="ts">
    import { page } from '$app/state';
    import type { LayoutProps } from './$types';

    let { children }: LayoutProps = $props();
    let drawerOpen = $state(false);
</script>

<div class="drawer lg:drawer-open">
    <input id="app-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />

    <div class="drawer-content flex min-h-screen flex-col">
        <header class="navbar bg-base-100 shadow-sm lg:hidden">
            <label for="app-drawer" class="btn btn-square btn-ghost" aria-label="Open navigation menu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>
            <span class="ml-2 text-lg font-semibold">KnowBaguio Admin</span>
        </header>

        <main class="flex-1 p-4 md:p-8">
            {@render children()}
        </main>
    </div>

    <div class="drawer-side z-40">
        <label for="app-drawer" class="drawer-overlay" aria-label="Close navigation menu"></label>
        <aside class="min-h-full w-72 bg-base-200 text-base-content">
            <div class="border-b border-base-300 p-4">
                <p class="text-lg font-bold">KnowBaguio</p>
                <p class="text-sm text-base-content/70">Admin panel</p>
            </div>

            <nav aria-label="Main navigation">
                <ul class="menu gap-1 p-4">
                    <li>
                        <a
                            href="/"
                            class:active={page.url.pathname === '/'}
                            aria-current={page.url.pathname === '/' ? 'page' : undefined}
                            onclick={() => (drawerOpen = false)}
                        >
                            Dashboard
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    </div>
</div>
