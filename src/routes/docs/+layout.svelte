<script lang="ts">
import Footer from '$lib/components/Footer.svelte'
import HomePageNavbar from '$lib/components/HomePageNavbar.svelte'
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<HomePageNavbar />

<main class="container mx-auto">
    <div class="py-8">
        {@render children?.()}
    </div>
</main>

<Footer />
