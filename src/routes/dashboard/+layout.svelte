<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";
    import DashboardNavbar from "$lib/components/DashboardNavbar.svelte";
</script>

<AuthCheck>
    <DashboardNavbar />

    <main class="px-6 py-4">
        <slot />
    </main>
</AuthCheck>
