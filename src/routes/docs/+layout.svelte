<script>
    import Footer from "$lib/components/Footer.svelte";
    import HomePageNavbar from "$lib/components/HomePageNavbar.svelte";
    import * as Card from "$lib/components/ui/card";
</script>

<main class="mx-auto max-w-7xl">
    <HomePageNavbar />
    <slot />
</main>
<Footer />
