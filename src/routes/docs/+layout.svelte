<script>
    import Footer from "$lib/components/Footer.svelte";
    import HomePageNavbar from "$lib/components/HomePageNavbar.svelte";
</script>

<main class="mx-auto max-w-7xl">
    <HomePageNavbar />
    <div class="p-4">
        <slot />
    </div>
</main>
<Footer />
