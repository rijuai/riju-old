<script>
import Footer from '$lib/components/Footer.svelte'
import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
</script>

<HomePageNavbar />
<main class="container mx-auto">
    <div class="py-8">
        <slot />
    </div>
</main>
<Footer />
