<script lang="ts">
    import AuthCheck from "./AuthCheck.svelte";
    import DashboardNavbar from "./DashboardNavbar.svelte";
</script>

<AuthCheck>
    <DashboardNavbar />

    <main class="px-6 py-4">
        <slot />
    </main>
</AuthCheck>
