<script>
    import Footer from "./Footer.svelte";
    import HomePageNavbar from "./HomePageNavbar.svelte";
</script>

<main class="mx-auto max-w-7xl">
    <HomePageNavbar />
    <div class="px-4 py-12 md:py-16">
        <slot />
    </div>
    <Footer />
</main>
