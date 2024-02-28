<script>
    import Footer from "./Footer.svelte";
    import HomePageNavbar from "./HomePageNavbar.svelte";
</script>

<HomePageNavbar />
<main class="container mx-auto">
    <div class="px-4 py-12 md:py-16">
        <slot />
    </div>
    <Footer />
</main>
