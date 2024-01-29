<script lang="ts">
    import AuthCheck from "./AuthCheck.svelte";
    import Navbar from "./Navbar.svelte";
</script>

<AuthCheck>
    <Navbar />

    <main class="px-6 py-4">
        <slot />
    </main>
</AuthCheck>
