<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<form method="POST" action="?/logout" class="flex min-h-screen items-center justify-center">
    <button type="submit" class="btn">Logout</button>
</form>