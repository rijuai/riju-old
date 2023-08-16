<script lang="ts">
	import { page } from '$app/stores';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import DashboardNavbar from '$lib/ui/DashboardNavbar.svelte';
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte';
	import PresentViewNavbar from '$lib/ui/PresentViewNavbar.svelte';
	import '../app.css';
</script>

{#if $page.url.pathname.startsWith('/dashboard')}
	<DashboardNavbar />
{:else if $page.url.pathname.startsWith('/present')}
	<PresentViewNavbar />
{:else}
	<HomePageNavbar />
{/if}

<AnimatedRoute>
	<main class="p-4">
		<slot />
	</main>
</AnimatedRoute>
